import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const controls = [
  { id: 1, name: "Top 10" },
  { id: 2, name: "Top 40" },
  { id: 3, name: "Top 100" },
  { id: 4, name: "Custom" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function GridControl({}) {
  const [selected, setSelected] = useState("top10");
  return (
    <>
      <div className="p-2">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="rounded-md grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2"
        >
          {controls.map((control) => (
            <RadioGroup.Option
              key={control.id}
              value={control.name}
              className={({ checked }) =>
                classNames(
                  checked
                    ? "bg-indigo-50 dark:bg-indigo-800 border-indigo-200 dark:border-indigo-800"
                    : "border-gray-200 dark:border-gray-800",
                  "bg-gray-100 dark:bg-gray-900 border p-4 cursor-pointer focus:outline-none rounded-md"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center text-sm">
                    <span
                      className={classNames(
                        checked
                          ? "bg-indigo-600 border-transparent"
                          : "bg-white border-gray-300",
                        active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                        "h-4 w-4 rounded-full border flex items-center justify-center"
                      )}
                      aria-hidden="true"
                    >
                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                    </span>
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked ? "text-indigo-900" : "text-gray-900",
                        "ml-3 font-medium dark:text-white text-black"
                      )}
                    >
                      {control.name}
                    </RadioGroup.Label>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
          {selected == "Custom" &&
            <input
              type="number"
              min="101"
              max="1000"
              name="Custom"
              id="custom"
              placeholder="e.g 200 (max 1000)"
              className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 w-full p-3.5 shadow-sm border cursor-pointer focus:outline-none rounded-md"
            />
          }
        </RadioGroup>
      </div>
    </>
  );
}
