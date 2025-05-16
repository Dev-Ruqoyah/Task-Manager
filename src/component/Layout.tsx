
interface Page{
    page:React.FC
}
const Layout:React.FC<Page> = ({page:PageComponent}) => {
  return (
    <div className="h-[100vh] overflow-y-hidden">
        <div className="container md:max-w- w-full    mx-auto">

        <PageComponent/>
        </div>
    </div>
  )
}

export default Layout