/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner } from './ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner';
import { HttpFile } from '../http/http';

export class ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner {
    'id'?: number;
    'name'?: string;
    'url'?: string;
    'emojis'?: Array<ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.attributeTypeMap;
    }

    public constructor() {
    }
}
