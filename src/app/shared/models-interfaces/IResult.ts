import { Links2 } from "./ILinks2"
import { Urls } from "./IUrls"
import { User } from "./IUser"

export interface Result {
  id: string
  created_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  user: User
  current_user_collections: any[]
  urls: Urls
  links: Links2
}