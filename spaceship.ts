const leftGun: IWeapon = {position: 'left', weaponType: 'gun'};
const rightGun: IWeapon = {position: 'right', weaponType: 'gun'};
const leftLaser: IWeapon = {position: 'left', weaponType: 'laser'};
const rightLaser: IWeapon = {position: 'right', weaponType: 'laser'};
const transporterShip: ISpaceShip = {shipType: 'transporter', weapons: []};
const reactiveShip: ISpaceShip = {shipType: 'reactive', weapons: []};
const standardShip: ISpaceShip = {shipType: 'standard', weapons: []};
const transporterShipWeapons: IWeapon[] = [leftGun, rightGun, leftLaser, rightLaser];
const reactiveShipWeapons: IWeapon[] = [leftLaser, rightLaser];
const standardShipWeapons: IWeapon[] = [leftGun, rightGun];
const weaponMap: Map<ShipType, IWeapon[]> = new Map([
    ['transporter', transporterShipWeapons],
    ['reactive', reactiveShipWeapons],
    ['standard', standardShipWeapons],
]);

const addWeaponToSpaceShip = (spaceShip: ISpaceShip) => {
    const weapons: IWeapon[] = weaponMap.get(spaceShip.shipType);
    insertWeapons(weapons, spaceShip);
}

const insertWeapons = (weapons: IWeapon[], spaceShip: ISpaceShip) => {
    weapons.forEach((weapon: IWeapon) => spaceShip.weapons.push(weapon));
}

interface ISpaceShip {
    shipType: ShipType;
    weapons: IWeapon[];
}

interface IWeapon {
    position: WeaponPosition;
    weaponType: WeaponType;
}

type ShipType = 'transporter' | 'reactive' | 'standard';
type WeaponPosition = 'left' | 'right';
type WeaponType = 'gun' | 'laser';
