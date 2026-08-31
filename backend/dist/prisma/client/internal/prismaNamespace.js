import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Article: 'Article',
    Video: 'Video',
    Exercise: 'Exercise',
    Alternative: 'Alternative'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const ArticleScalarFieldEnum = {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    summary: 'summary',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const VideoScalarFieldEnum = {
    id: 'id',
    title: 'title',
    url: 'url',
    description: 'description',
    order: 'order',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ExerciseScalarFieldEnum = {
    id: 'id',
    prompt: 'prompt',
    explanation: 'explanation',
    order: 'order',
    articleId: 'articleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AlternativeScalarFieldEnum = {
    id: 'id',
    text: 'text',
    isCorrect: 'isCorrect',
    order: 'order',
    exerciseId: 'exerciseId'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map