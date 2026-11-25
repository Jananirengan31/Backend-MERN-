const useref = () => {

    const valueRef = useRef("")

    const handleClick =() =>{

        

    }

  return (
    <>
      <div>
        <input type="text " onClick={handleClick} ref={valueRef}/>

      </div>
    </>
  );
};

export default useref;