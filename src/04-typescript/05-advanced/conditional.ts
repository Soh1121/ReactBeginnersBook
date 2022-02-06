type User = { id: unknown };
type NewUser = User & { id: string };
type OldUser = User & { id: number };
type Book = { isbn: string };

type IdOf<T> = T extends User ? T['id'] : never;

type NewUserId = IdOf<NewUser>;		// string
type OldUserId = IdOf<OldUser>;		// number
type BookId = IdOf<Book>;					// never