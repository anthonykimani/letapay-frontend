
type Props = {
    className?: string
}

export default function Footer() {
    return (
      <footer className="bg-gypsum mt-auto border-black border-t">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-black">&copy; {new Date().getFullYear()} Developed by Letapay team</p>
          </div>
        </div>
      </footer>
    )
  }