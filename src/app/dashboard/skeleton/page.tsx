"use client";

import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return '123456789'.split('');
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {

  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        data.map((item) => (
          <Card key={item}>
            <CardHeader className="flex-row">
              <Image
                src='https://github.com/shadcn.png'
                alt='Shadcn'
                width={40}
                height={40}
                className="rounded-full mr-2 w-10 h-10"
              />
              <div>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button>More</Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}