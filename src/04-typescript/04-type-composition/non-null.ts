type Resident = {
	familyName: string;
	lastName: string;
	mom?: Resident;
}

const getMomName = (resident: Resident): string => resident.mom!.lastName;

const patty = { familyName: 'Hope-Rabbit', lastName: 'patty' };
getMomName(patty);
