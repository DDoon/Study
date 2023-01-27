declare interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

declare interface SearchHistory {
  content: string
  createdAt: number
}
