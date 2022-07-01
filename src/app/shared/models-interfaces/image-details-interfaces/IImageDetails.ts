import { ICurrentUserCollection } from "./ICurrentUserCollection"
import { IExif } from "./IExif"
import { ITag } from "./ITag"

export interface IImageDetails {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    downloads: number
    likes: number
    liked_by_user: boolean
    public_domain: boolean
    description: string
    exif: IExif
    location: Location
    tags: ITag[]
    current_user_collections:   ICurrentUserCollection[]
    urls: Urls
    links: ILinks
    user: User
  }