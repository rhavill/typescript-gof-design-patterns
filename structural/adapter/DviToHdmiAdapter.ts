import DviOutput from './DviOutput';
import IHdmiOutput from './IHdmiOutput';

class DviToHdmiAdapter extends DviOutput {

    constructor(private hdmiOutput: IHdmiOutput) {
        super();
    }

    outputDviData() {
        this.hdmiOutput.outputHdmiData();
    }    
}

export default DviToHdmiAdapter;