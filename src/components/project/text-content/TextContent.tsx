import { FC } from "react"
import { Paragraph } from "../../../commons"

type Props = {
  text?: { textOne: string; textTwo: string; textThree: string }
}

export const TextContent: FC<Props> = ({ text }) => {
  return (
    <>
      <li>
        <Paragraph style={{ textAlign: "left" }}>{text?.textOne}</Paragraph>
      </li>
      <li>
        <Paragraph style={{ textAlign: "left" }}>{text?.textTwo}</Paragraph>
      </li>
      <li>
        <Paragraph style={{ textAlign: "left" }}>{text?.textThree}</Paragraph>
      </li>
    </>
  )
}