const Container = ({ children, bgColor, id }) => {
  return (
    <div className={bgColor} id={id}>
      <div className="mx-lg-5 px-lg-5 py-4">
        <div className="mx-lg-5 mx-3 px-lg-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container;