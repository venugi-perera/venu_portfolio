"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  const handleClick = () => {
    window.open('/image/venugi_perera.pdf', '_blank');
  };

  return (
    <section id="resume" className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Highly skilled and creative Web Developer with years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <div className="flex space-x-4 mt-6">
            <Button
              variant="filled"
              color="blue"
              className="flex items-center gap-2"
              onClick={handleClick} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <ArrowRightIcon
                strokeWidth={3}
                className="h-5 w-5 text-white"
              />
              View more
            </Button>
            <a href="/image/venugi_perera.pdf" download="Venugi Perera - Resume">
              <Button
                variant="filled"
                color="blue"
                className="flex items-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <DocumentArrowDownIcon className="h-5 w-5 text-white" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
