import { Coordinates, TypeObject, BusyCoordinates } from '../types'

interface CoordinateModifications {
	byI?: '+' | '-'
	extraCalc?: string
}

interface Obj extends Coordinates {
	id: string
	type?: TypeObject
}

export const getSideCoordinates = (
	arr: BusyCoordinates[] | Coordinates[],
	loops: number,
	obj: Obj,
	xModify?: CoordinateModifications,
	yModify?: CoordinateModifications,
	type: TypeObject = 'TREES'
) => {
	for (let i = 0; i < loops; i++) {
		let xModification = 0
		if (xModify) {
			if (xModify.extraCalc) xModification += Number(xModify.extraCalc)
			if (xModify.byI === '+') xModification += i
			if (xModify.byI === '-') xModification -= i
		}

		let yModification = 0

		if (yModify) {
			if (yModify.extraCalc) yModification += Number(yModify.extraCalc)
			if (yModify.byI === '+') yModification += i
			if (yModify.byI === '-') yModification -= i
		}
		arr.push({
			coordinateX: obj.coordinateX + xModification,
			coordinateY: obj.coordinateY + yModification,
			id: obj.id,
			type: obj.type ?? type,
		})
	}
}

export const isAnyCoordinatesMatches = (
	firstArray: BusyCoordinates[],
	secondArray: BusyCoordinates[]
) => {
	for (let i = 0; i < firstArray.length; i++) {
		const c = firstArray[i]
		for (let l = 0; l < secondArray.length; l++) {
			const b = secondArray[l]
			if (
				c.coordinateX === b.coordinateX &&
				c.coordinateY === b.coordinateY
			) {
				return true
			}
		}
	}
	return false
}
