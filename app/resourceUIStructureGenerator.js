/**
 * Created by robertzzy on 02/08/16.
 */
import * as modelTypes from './model'

export function generateUIStructure(type, state){
	let entryStructure = [];
	switch (type){
		case modelTypes.MUSCLE_GROUP:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'muscles', headerText:'肌肉', type:'multi-select', data:state.allMuscles});
			break;
		case modelTypes.EQUIPMENT:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'detail', headerText:'介绍', type:'text'});
			entryStructure.push({header:'type', headerText:'类型', type:'text'});
			break;
		case modelTypes.MUSCLE:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			break;
		case modelTypes.EXERCISE:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'majorMuscles', headerText:'主要肌肉', type:'multi-select', data:state.allMuscles});
			entryStructure.push({header:'minorMuscles', headerText:'次要肌肉', type:'multi-select', data:state.allMuscles});
			entryStructure.push({header:'equipments', headerText:'器械', type:'multi-select', data:state.allEquipments});
			entryStructure.push({header:'basicContent', headerText:'基础教程', type:'textarea'});
			entryStructure.push({header:'advancedContent', headerText:'高级教程', type:'textarea'});
			entryStructure.push({header:'repetition-duration', headerText:'基础数据类型', type:'select', data:['次数', '时长'], placeHolder:'选择类型'});


			break;
	}
	return entryStructure
}