import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Article: "Article";
    readonly Video: "Video";
    readonly Exercise: "Exercise";
    readonly Alternative: "Alternative";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ArticleScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly summary: "summary";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum];
export declare const VideoScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly url: "url";
    readonly description: "description";
    readonly order: "order";
    readonly articleId: "articleId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];
export declare const ExerciseScalarFieldEnum: {
    readonly id: "id";
    readonly prompt: "prompt";
    readonly explanation: "explanation";
    readonly order: "order";
    readonly articleId: "articleId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum];
export declare const AlternativeScalarFieldEnum: {
    readonly id: "id";
    readonly text: "text";
    readonly isCorrect: "isCorrect";
    readonly order: "order";
    readonly exerciseId: "exerciseId";
};
export type AlternativeScalarFieldEnum = (typeof AlternativeScalarFieldEnum)[keyof typeof AlternativeScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
