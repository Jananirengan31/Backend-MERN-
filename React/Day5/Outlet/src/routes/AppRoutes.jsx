

const AppRoutes =()=>{

  return(

    <>
    <Routes>

        <Route path="/" elements={<Home/>}/>
        <Route path="/About" elements={<About/>} />
        <Route path="/Contact" elements={<Contact/>} />
        <Route path="/Login" elements={<Login/>}/>
        <Route path="/Register" elements={<Register/>}/>
    </Routes>

    </>
  )
}