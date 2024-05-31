"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "../../../components/ui/toast";

export default function Page() {

  const { toast } = useToast();

  return (
    <div className="grid grid-cols-4 gap-3">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction
              altText="Try again"
              onClick={() => console.log('Try again')}
            >Try again</ToastAction>,
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Destructive
      </Button>

      <Button
        variant="success"
        onClick={() => {
          toast({
            variant: "success",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Success
      </Button>

    </div>
  );
}