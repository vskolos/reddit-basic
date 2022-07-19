interface IMyHomeTask {
  howIDoIt: string
  simeArray: (string | number)[]
  withData: {
    howIDoIt: string
    simeArray: (string | number)[]
  }[]
}

const MyHometask: IMyHomeTask = {
  howIDoIt: 'I Do It Well',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
}

console.log(MyHometask.howIDoIt)
