import EnvRisks from "./env_risks/env_risks"
import Gauge from "./gauge_chart/gauge"

const PlaceStatus = () => {
    return(
        <div className="flex flex-col space-y-10 mx-1 items-center w-full">
            <Gauge />
            <EnvRisks />
        </div>
    )
}

export default PlaceStatus