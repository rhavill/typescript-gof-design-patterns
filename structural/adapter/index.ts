import DviToHdmiAdapter from './DviToHdmiAdapter';
import HdmiOutput from './HdmiOutput';

const adapter = new DviToHdmiAdapter(new HdmiOutput());
adapter.outputDviData();