/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LlBTFI635aZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProductCarousel() {
  return (
    <Carousel
      className="w-1/2 max-w-6xl mx-auto"
      options={{
        align: 'center',
        loop: true,
        slidesToScroll: 1,
        slidesToShow: { base: 2, md: 2, lg: 3 },
        spacing: 16,
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <Card className="w-full border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 flex items-center justify-center aspect-square">
              <span className="text-4xl font-semibold">1</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 flex items-center justify-center aspect-square">
              <span className="text-4xl font-semibold">2</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 flex items-center justify-center aspect-square">
              <span className="text-4xl font-semibold">3</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 flex items-center justify-center aspect-square">
              <span className="text-4xl font-semibold">4</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 flex items-center justify-center aspect-square">
              <span className="text-4xl font-semibold">5</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 flex items-center justify-center aspect-square">
              <span className="text-4xl font-semibold">6</span>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Button variant="outline" size="icon">
          <ChevronLeftIcon className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </CarouselNext>
    </Carousel>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
