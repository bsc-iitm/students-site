const Loader = ({ loading, children }) => {
  return loading ? (<></>) : (children)
}

export default Loader;