import GridLoader from "react-spinners/GridLoader"
const Loader = () => (
    <div className="loader">
        <GridLoader color="#F78154" margin={1} size={7}></GridLoader>
        <span className="h4"> Loading menu </span>
        <GridLoader color="#F78154" margin={1} size={7}></GridLoader>
    </div>
);


export default Loader;