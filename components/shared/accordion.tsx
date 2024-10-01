"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";

interface AccordionProps {
  data: {
    title: string;
    items: { id: number; title: string; description: string }[];
  };
}

interface AccordionItemProps {
  title: string;
  description: string;
  id: number;
  active: number;
  setActive: (id: number) => void;
}

const Accordion = ({ data: { title, items } }: AccordionProps) => {
  const [active, setActive] = useState(0);

  const handleSetActive = useCallback(
    (id: number) => {
      setActive(active === id ? 0 : id);
    },
    [active],
  );

  return (
    <div className="space-y-8">
      <h4 className="text-2xl font-semibold text-primary lg:text-3xl">
        {title}
      </h4>
      <div className="space-y-6">
        {items.map(({ description, id, title }) => (
          <AccordionItem
            description={description}
            id={id}
            key={id}
            title={title}
            active={active}
            setActive={handleSetActive}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = memo(
  ({ description, id, title, active, setActive }: AccordionItemProps) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (contentRef.current) {
        setHeight(active === id ? contentRef.current.scrollHeight : 0);
      }
    }, [active, id]);

    const handleSetActive = () => {
      setActive(id);
    };

    return (
      <div className="space-y-2">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={handleSetActive}
        >
          <h6 className="font-semibold lg:text-lg">{title}</h6>
          <ChevronDown
            size={20}
            className={clsx("transition-transform duration-300", {
              "rotate-180": active === id,
            })}
          />
        </div>
        <div
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          style={{ height }}
        >
          <div ref={contentRef}>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
export default Accordion;
