import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function DropDown() {
  return (
    <div className="md:z-50 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center    text-sm/6  text-white shadow-inner shadow-white/10 focus:outline-none   data-[focus]:outline-1 data-[focus]:outline-white">
          <li className="flex items-center">
            <a
              href="/"
              className=" flex items-center  md:text-[12px] text-[14px] lg:text-[16px] py-1"
            >
              Our Solutions
              <MdKeyboardArrowDown className="text-3xl group-hover:rotate-180" />
            </a>
          </li>
        </MenuButton>

        <ul className="list-none w-full">
          <MenuItems
            transition
            anchor="bottom end"
            className="md:z-50 z-50 bg-white text-dark  origin-top-right rounded-xl border border-white/5  p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <li className="list-none">
              <MenuItem>
                <a
                  href="/DigitalAccessibility"
                  className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3 "
                >
                  Digital Accessibility Services
                </a>
              </MenuItem>
            </li>
            <li className="list-none">
              <MenuItem>
                <a
                  href="/TrendSoft/oursolutions/Testing"
                  className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3 "
                >
                  Testing Services
                </a>
              </MenuItem>
            </li>
            <li className="list-none">
              <MenuItem>
                <a
                  href="/TrendSoft/oursolutions/CyberSecurity"
                  className="group flex w-full md:text-[14px] hover:bg-dark/5 items-center gap-2 rounded-lg py-1.5 px-3 "
                >
                  Cyber Security
                </a>
              </MenuItem>
            </li>
          </MenuItems>
        </ul>
      </Menu>
    </div>
  );
}
