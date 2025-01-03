import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
import { cn } from "../lib/utils";

import { MapType } from "japan-prefectures-react";

const mapTypes: { label: string; value: MapType }[] = [
  {
    label: "Full",
    value: "full",
  },
  {
    label: "Dense",
    value: "dense",
  },
  {
    label: "Deform",
    value: "deform",
  },
];

export function MapTypeCombobox({
  selectedMapType,
  setMapType,
}: {
  selectedMapType: MapType;
  setMapType: (mapType: MapType) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedMapType
            ? mapTypes.find((mapType) => mapType.value === selectedMapType)
                ?.label
            : "Select map type..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {mapTypes.map((mapType) => (
                <CommandItem
                  key={mapType.value}
                  value={mapType.value}
                  onSelect={() => {
                    setMapType(mapType.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedMapType === mapType.value
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {mapType.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
