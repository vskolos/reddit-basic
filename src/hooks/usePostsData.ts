import { RefObject, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { fetchPosts } from '../app/postsSlice'

export default function usePostsData(
  postsListBottom: RefObject<HTMLLIElement>
): [number, React.Dispatch<React.SetStateAction<number>>] {
  const token = useSelector((state: RootState) => state.token.value)
  const after = useSelector((state: RootState) => state.posts.after)
  const dispatch = useDispatch()

  const [loadsCount, setLoadsCount] = useState(0)

  useEffect(() => {
    if (!token) return
    dispatch(fetchPosts({ token: token, after: '' }))
  }, [token])

  useEffect(() => {
    if (!token) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (loadsCount === 2) return

          dispatch(fetchPosts({ token: token, after: after }))
          setLoadsCount(loadsCount + 1)
        }
      },
      { rootMargin: '100px' }
    )

    if (postsListBottom.current) observer.observe(postsListBottom.current)

    return () => {
      if (postsListBottom.current) observer.unobserve(postsListBottom.current)
    }
  }, [after])

  return [loadsCount, setLoadsCount]
}
