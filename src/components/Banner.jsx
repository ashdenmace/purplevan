function Banner () {

    const styles = {
        // background: 'linear-gradient(to top, #430082, #9b4dff)',
        backgroundColor: "#9b4dff"
    }
    return (
        <>
        <div className="d-flex flex-row justify-content-center align-items-center text-white py-3" style={styles}>
            <p className="mx-3">Home</p>
            <p className="mx-3">About</p>
            <p className="mx-3">Before</p>
            <p className="mx-3">After</p>
            <p className="mx-3">Contact</p>
        </div>
        </>
    )
}

export default Banner;