export interface AccountInput {
    owner: string
}

export interface AccountOutput {
    id?: number,
    owner?: string,
    balance?: number,
    createdOn?: string
}