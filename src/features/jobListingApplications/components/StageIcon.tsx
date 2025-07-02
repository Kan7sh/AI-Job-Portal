import { applicationStage } from "@/drizzle/schema"
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleXIcon,
  HandshakeIcon,
  SpeechIcon,
} from "lucide-react"
import { ComponentPropsWithRef } from "react"

export function StageIcon({
  stage,
  ...props
}: { stage: applicationStage } & ComponentPropsWithRef<typeof CircleHelpIcon>) {
  const Icon = getIcon(stage)
  return <Icon {...props} />
}

function getIcon(stage: applicationStage) {
  switch (stage) {
    case "applied":
      return CircleHelpIcon
    case "interested":
      return CircleCheckIcon
    case "denied":
      return CircleXIcon
    case "interviewed":
      return SpeechIcon
    case "hired":
      return HandshakeIcon
    default:
      throw new Error(`Unknown application stage: ${stage satisfies never}`)
  }
}