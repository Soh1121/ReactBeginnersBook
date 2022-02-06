type Permission = 'r' | 'w' | 'x';

type RW1 = Extract<Permission, 'r' | 'w'>;
type RW2 = Extract<Permission, 'x'>;
