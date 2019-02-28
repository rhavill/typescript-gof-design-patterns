import IHdmiOutput from './IHdmiOutput';

class HdmiOutput implements IHdmiOutput {
    outputHdmiData() {
        console.log('Outputting HDMI data.');
    }    
}

export default HdmiOutput;