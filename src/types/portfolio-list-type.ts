export type AboutType = {
  paragraphFirst: TextType
  paragraphSecond: TextType
  paragraphThird: TextType
  stack: string
}

export type TextType = {
  textOne: string
  textTwo: string
  textThree: string
}

export type PortfolioListType = {
  id: number
  link: string
  srcPageFirst: string
  srcPageSecond: string
  src: string
  project: string
  title: string
  description: string
  about: AboutType[]
}
