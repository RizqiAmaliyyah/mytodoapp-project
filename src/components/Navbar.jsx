export default function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-600">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-center">
          
          <ul className="cursor-pointer flex flex-row  text-2xl font-semibold mt-0 space-x-8 rtl:space-x-reverse">
            <li className=" hover:underline ">All</li>
            <li className="hover:underline">Active</li>
            <li className="hover:underline">Completed</li>
          </ul>

        </div>
      </div>
    </nav>
  )
}