import * as React from "react";

import {Input} from "@/components/ui/input"
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ReactCompilerOptions } from "next/dist/server/config-shared";

function Userbox({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {

    return (
        <div
          data-slot="card"
          data-size={size}
          className={cn(
            "group/card flex gap-18 overflow-hidden bg-black mb-5  rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
            className
          )}
          {...props}
        />
      )
}

function UserboxLeft({ className, ...props}: React.ComponentProps<"div">) {
    return (
        <div data-slot="card-header"
              className={cn(
                "",
                className
              )}
              {...props} />
    )
}

function UserboxRight({ className, ...props}: React.ComponentProps<"div">) {
    return (
        <div data-slot="card-header"
              className={cn(
                "",
                className
              )}
              {...props} />
    )
}

export {Userbox, UserboxLeft, UserboxRight}