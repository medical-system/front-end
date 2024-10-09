import ReceptionsTable from '../views/Receptions/ReceptionsTable'

const Receptions = () => {
    return (
        <>
            {/* page title */}
            <h1 className="text-xl font-semibold">Receptions</h1>

            {/*receptions Table*/}
            <div data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="10"
                data-aos-offset="200"
                className="bg-white my-8 rounded-xl border-[1px] border-border p-5">

                <ReceptionsTable />
            </div>
        </>
    )
}

export default Receptions