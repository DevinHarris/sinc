import { BellRing, Check } from "lucide-react"

import { cn } from "@/src/app/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/app/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "LA Fitness is getting busier. Please plan accordingly.",
    description: "3s ago",
  },

  {
    title: "Your Push workout has been comfirmed.",
    description: "1 min ago",
  },
  {
    title: "LA Fitness is currently empty. Now is the best time to go.",
    description: "12 mins ago",
  },
  {
    title: "Your subscription has been updated to SINC All Access!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, avatarSrc, ...delegated }: { 
  className?: string, 
  avatarSrc?: string | undefined
}) {
  return (
    <Card className={cn("w-[380px]", className)} {...delegated}>
      <CardHeader>
     
        <CardTitle>Notifications</CardTitle>
        <CardDescription>{`You have ${notifications.length} unread messages.`}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={"secondary"}>
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
