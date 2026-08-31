import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExerciseModel = runtime.Types.Result.DefaultSelection<Prisma.$ExercisePayload>;
export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null;
    _avg: ExerciseAvgAggregateOutputType | null;
    _sum: ExerciseSumAggregateOutputType | null;
    _min: ExerciseMinAggregateOutputType | null;
    _max: ExerciseMaxAggregateOutputType | null;
};
export type ExerciseAvgAggregateOutputType = {
    order: number | null;
};
export type ExerciseSumAggregateOutputType = {
    order: number | null;
};
export type ExerciseMinAggregateOutputType = {
    id: string | null;
    prompt: string | null;
    explanation: string | null;
    order: number | null;
    articleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExerciseMaxAggregateOutputType = {
    id: string | null;
    prompt: string | null;
    explanation: string | null;
    order: number | null;
    articleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExerciseCountAggregateOutputType = {
    id: number;
    prompt: number;
    explanation: number;
    order: number;
    articleId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExerciseAvgAggregateInputType = {
    order?: true;
};
export type ExerciseSumAggregateInputType = {
    order?: true;
};
export type ExerciseMinAggregateInputType = {
    id?: true;
    prompt?: true;
    explanation?: true;
    order?: true;
    articleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExerciseMaxAggregateInputType = {
    id?: true;
    prompt?: true;
    explanation?: true;
    order?: true;
    articleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExerciseCountAggregateInputType = {
    id?: true;
    prompt?: true;
    explanation?: true;
    order?: true;
    articleId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExerciseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExerciseWhereInput;
    orderBy?: Prisma.ExerciseOrderByWithRelationInput | Prisma.ExerciseOrderByWithRelationInput[];
    cursor?: Prisma.ExerciseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExerciseCountAggregateInputType;
    _avg?: ExerciseAvgAggregateInputType;
    _sum?: ExerciseSumAggregateInputType;
    _min?: ExerciseMinAggregateInputType;
    _max?: ExerciseMaxAggregateInputType;
};
export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
    [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExercise[P]> : Prisma.GetScalarType<T[P], AggregateExercise[P]>;
};
export type ExerciseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExerciseWhereInput;
    orderBy?: Prisma.ExerciseOrderByWithAggregationInput | Prisma.ExerciseOrderByWithAggregationInput[];
    by: Prisma.ExerciseScalarFieldEnum[] | Prisma.ExerciseScalarFieldEnum;
    having?: Prisma.ExerciseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExerciseCountAggregateInputType | true;
    _avg?: ExerciseAvgAggregateInputType;
    _sum?: ExerciseSumAggregateInputType;
    _min?: ExerciseMinAggregateInputType;
    _max?: ExerciseMaxAggregateInputType;
};
export type ExerciseGroupByOutputType = {
    id: string;
    prompt: string;
    explanation: string | null;
    order: number;
    articleId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ExerciseCountAggregateOutputType | null;
    _avg: ExerciseAvgAggregateOutputType | null;
    _sum: ExerciseSumAggregateOutputType | null;
    _min: ExerciseMinAggregateOutputType | null;
    _max: ExerciseMaxAggregateOutputType | null;
};
export type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExerciseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExerciseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExerciseGroupByOutputType[P]>;
}>>;
export type ExerciseWhereInput = {
    AND?: Prisma.ExerciseWhereInput | Prisma.ExerciseWhereInput[];
    OR?: Prisma.ExerciseWhereInput[];
    NOT?: Prisma.ExerciseWhereInput | Prisma.ExerciseWhereInput[];
    id?: Prisma.StringFilter<"Exercise"> | string;
    prompt?: Prisma.StringFilter<"Exercise"> | string;
    explanation?: Prisma.StringNullableFilter<"Exercise"> | string | null;
    order?: Prisma.IntFilter<"Exercise"> | number;
    articleId?: Prisma.StringFilter<"Exercise"> | string;
    createdAt?: Prisma.DateTimeFilter<"Exercise"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exercise"> | Date | string;
    article?: Prisma.XOR<Prisma.ArticleScalarRelationFilter, Prisma.ArticleWhereInput>;
    alternatives?: Prisma.AlternativeListRelationFilter;
};
export type ExerciseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    article?: Prisma.ArticleOrderByWithRelationInput;
    alternatives?: Prisma.AlternativeOrderByRelationAggregateInput;
};
export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExerciseWhereInput | Prisma.ExerciseWhereInput[];
    OR?: Prisma.ExerciseWhereInput[];
    NOT?: Prisma.ExerciseWhereInput | Prisma.ExerciseWhereInput[];
    prompt?: Prisma.StringFilter<"Exercise"> | string;
    explanation?: Prisma.StringNullableFilter<"Exercise"> | string | null;
    order?: Prisma.IntFilter<"Exercise"> | number;
    articleId?: Prisma.StringFilter<"Exercise"> | string;
    createdAt?: Prisma.DateTimeFilter<"Exercise"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exercise"> | Date | string;
    article?: Prisma.XOR<Prisma.ArticleScalarRelationFilter, Prisma.ArticleWhereInput>;
    alternatives?: Prisma.AlternativeListRelationFilter;
}, "id">;
export type ExerciseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExerciseCountOrderByAggregateInput;
    _avg?: Prisma.ExerciseAvgOrderByAggregateInput;
    _max?: Prisma.ExerciseMaxOrderByAggregateInput;
    _min?: Prisma.ExerciseMinOrderByAggregateInput;
    _sum?: Prisma.ExerciseSumOrderByAggregateInput;
};
export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExerciseScalarWhereWithAggregatesInput | Prisma.ExerciseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExerciseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExerciseScalarWhereWithAggregatesInput | Prisma.ExerciseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Exercise"> | string;
    prompt?: Prisma.StringWithAggregatesFilter<"Exercise"> | string;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"Exercise"> | string | null;
    order?: Prisma.IntWithAggregatesFilter<"Exercise"> | number;
    articleId?: Prisma.StringWithAggregatesFilter<"Exercise"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Exercise"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Exercise"> | Date | string;
};
export type ExerciseCreateInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    article: Prisma.ArticleCreateNestedOneWithoutExercisesInput;
    alternatives?: Prisma.AlternativeCreateNestedManyWithoutExerciseInput;
};
export type ExerciseUncheckedCreateInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    articleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    alternatives?: Prisma.AlternativeUncheckedCreateNestedManyWithoutExerciseInput;
};
export type ExerciseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    article?: Prisma.ArticleUpdateOneRequiredWithoutExercisesNestedInput;
    alternatives?: Prisma.AlternativeUpdateManyWithoutExerciseNestedInput;
};
export type ExerciseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alternatives?: Prisma.AlternativeUncheckedUpdateManyWithoutExerciseNestedInput;
};
export type ExerciseCreateManyInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    articleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExerciseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExerciseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExerciseListRelationFilter = {
    every?: Prisma.ExerciseWhereInput;
    some?: Prisma.ExerciseWhereInput;
    none?: Prisma.ExerciseWhereInput;
};
export type ExerciseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExerciseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExerciseAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ExerciseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExerciseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExerciseSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ExerciseScalarRelationFilter = {
    is?: Prisma.ExerciseWhereInput;
    isNot?: Prisma.ExerciseWhereInput;
};
export type ExerciseCreateNestedManyWithoutArticleInput = {
    create?: Prisma.XOR<Prisma.ExerciseCreateWithoutArticleInput, Prisma.ExerciseUncheckedCreateWithoutArticleInput> | Prisma.ExerciseCreateWithoutArticleInput[] | Prisma.ExerciseUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ExerciseCreateOrConnectWithoutArticleInput | Prisma.ExerciseCreateOrConnectWithoutArticleInput[];
    createMany?: Prisma.ExerciseCreateManyArticleInputEnvelope;
    connect?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
};
export type ExerciseUncheckedCreateNestedManyWithoutArticleInput = {
    create?: Prisma.XOR<Prisma.ExerciseCreateWithoutArticleInput, Prisma.ExerciseUncheckedCreateWithoutArticleInput> | Prisma.ExerciseCreateWithoutArticleInput[] | Prisma.ExerciseUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ExerciseCreateOrConnectWithoutArticleInput | Prisma.ExerciseCreateOrConnectWithoutArticleInput[];
    createMany?: Prisma.ExerciseCreateManyArticleInputEnvelope;
    connect?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
};
export type ExerciseUpdateManyWithoutArticleNestedInput = {
    create?: Prisma.XOR<Prisma.ExerciseCreateWithoutArticleInput, Prisma.ExerciseUncheckedCreateWithoutArticleInput> | Prisma.ExerciseCreateWithoutArticleInput[] | Prisma.ExerciseUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ExerciseCreateOrConnectWithoutArticleInput | Prisma.ExerciseCreateOrConnectWithoutArticleInput[];
    upsert?: Prisma.ExerciseUpsertWithWhereUniqueWithoutArticleInput | Prisma.ExerciseUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: Prisma.ExerciseCreateManyArticleInputEnvelope;
    set?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    disconnect?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    delete?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    connect?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    update?: Prisma.ExerciseUpdateWithWhereUniqueWithoutArticleInput | Prisma.ExerciseUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?: Prisma.ExerciseUpdateManyWithWhereWithoutArticleInput | Prisma.ExerciseUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: Prisma.ExerciseScalarWhereInput | Prisma.ExerciseScalarWhereInput[];
};
export type ExerciseUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: Prisma.XOR<Prisma.ExerciseCreateWithoutArticleInput, Prisma.ExerciseUncheckedCreateWithoutArticleInput> | Prisma.ExerciseCreateWithoutArticleInput[] | Prisma.ExerciseUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ExerciseCreateOrConnectWithoutArticleInput | Prisma.ExerciseCreateOrConnectWithoutArticleInput[];
    upsert?: Prisma.ExerciseUpsertWithWhereUniqueWithoutArticleInput | Prisma.ExerciseUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: Prisma.ExerciseCreateManyArticleInputEnvelope;
    set?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    disconnect?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    delete?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    connect?: Prisma.ExerciseWhereUniqueInput | Prisma.ExerciseWhereUniqueInput[];
    update?: Prisma.ExerciseUpdateWithWhereUniqueWithoutArticleInput | Prisma.ExerciseUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?: Prisma.ExerciseUpdateManyWithWhereWithoutArticleInput | Prisma.ExerciseUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: Prisma.ExerciseScalarWhereInput | Prisma.ExerciseScalarWhereInput[];
};
export type ExerciseCreateNestedOneWithoutAlternativesInput = {
    create?: Prisma.XOR<Prisma.ExerciseCreateWithoutAlternativesInput, Prisma.ExerciseUncheckedCreateWithoutAlternativesInput>;
    connectOrCreate?: Prisma.ExerciseCreateOrConnectWithoutAlternativesInput;
    connect?: Prisma.ExerciseWhereUniqueInput;
};
export type ExerciseUpdateOneRequiredWithoutAlternativesNestedInput = {
    create?: Prisma.XOR<Prisma.ExerciseCreateWithoutAlternativesInput, Prisma.ExerciseUncheckedCreateWithoutAlternativesInput>;
    connectOrCreate?: Prisma.ExerciseCreateOrConnectWithoutAlternativesInput;
    upsert?: Prisma.ExerciseUpsertWithoutAlternativesInput;
    connect?: Prisma.ExerciseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExerciseUpdateToOneWithWhereWithoutAlternativesInput, Prisma.ExerciseUpdateWithoutAlternativesInput>, Prisma.ExerciseUncheckedUpdateWithoutAlternativesInput>;
};
export type ExerciseCreateWithoutArticleInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    alternatives?: Prisma.AlternativeCreateNestedManyWithoutExerciseInput;
};
export type ExerciseUncheckedCreateWithoutArticleInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    alternatives?: Prisma.AlternativeUncheckedCreateNestedManyWithoutExerciseInput;
};
export type ExerciseCreateOrConnectWithoutArticleInput = {
    where: Prisma.ExerciseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExerciseCreateWithoutArticleInput, Prisma.ExerciseUncheckedCreateWithoutArticleInput>;
};
export type ExerciseCreateManyArticleInputEnvelope = {
    data: Prisma.ExerciseCreateManyArticleInput | Prisma.ExerciseCreateManyArticleInput[];
    skipDuplicates?: boolean;
};
export type ExerciseUpsertWithWhereUniqueWithoutArticleInput = {
    where: Prisma.ExerciseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExerciseUpdateWithoutArticleInput, Prisma.ExerciseUncheckedUpdateWithoutArticleInput>;
    create: Prisma.XOR<Prisma.ExerciseCreateWithoutArticleInput, Prisma.ExerciseUncheckedCreateWithoutArticleInput>;
};
export type ExerciseUpdateWithWhereUniqueWithoutArticleInput = {
    where: Prisma.ExerciseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExerciseUpdateWithoutArticleInput, Prisma.ExerciseUncheckedUpdateWithoutArticleInput>;
};
export type ExerciseUpdateManyWithWhereWithoutArticleInput = {
    where: Prisma.ExerciseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExerciseUpdateManyMutationInput, Prisma.ExerciseUncheckedUpdateManyWithoutArticleInput>;
};
export type ExerciseScalarWhereInput = {
    AND?: Prisma.ExerciseScalarWhereInput | Prisma.ExerciseScalarWhereInput[];
    OR?: Prisma.ExerciseScalarWhereInput[];
    NOT?: Prisma.ExerciseScalarWhereInput | Prisma.ExerciseScalarWhereInput[];
    id?: Prisma.StringFilter<"Exercise"> | string;
    prompt?: Prisma.StringFilter<"Exercise"> | string;
    explanation?: Prisma.StringNullableFilter<"Exercise"> | string | null;
    order?: Prisma.IntFilter<"Exercise"> | number;
    articleId?: Prisma.StringFilter<"Exercise"> | string;
    createdAt?: Prisma.DateTimeFilter<"Exercise"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exercise"> | Date | string;
};
export type ExerciseCreateWithoutAlternativesInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    article: Prisma.ArticleCreateNestedOneWithoutExercisesInput;
};
export type ExerciseUncheckedCreateWithoutAlternativesInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    articleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExerciseCreateOrConnectWithoutAlternativesInput = {
    where: Prisma.ExerciseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExerciseCreateWithoutAlternativesInput, Prisma.ExerciseUncheckedCreateWithoutAlternativesInput>;
};
export type ExerciseUpsertWithoutAlternativesInput = {
    update: Prisma.XOR<Prisma.ExerciseUpdateWithoutAlternativesInput, Prisma.ExerciseUncheckedUpdateWithoutAlternativesInput>;
    create: Prisma.XOR<Prisma.ExerciseCreateWithoutAlternativesInput, Prisma.ExerciseUncheckedCreateWithoutAlternativesInput>;
    where?: Prisma.ExerciseWhereInput;
};
export type ExerciseUpdateToOneWithWhereWithoutAlternativesInput = {
    where?: Prisma.ExerciseWhereInput;
    data: Prisma.XOR<Prisma.ExerciseUpdateWithoutAlternativesInput, Prisma.ExerciseUncheckedUpdateWithoutAlternativesInput>;
};
export type ExerciseUpdateWithoutAlternativesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    article?: Prisma.ArticleUpdateOneRequiredWithoutExercisesNestedInput;
};
export type ExerciseUncheckedUpdateWithoutAlternativesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExerciseCreateManyArticleInput = {
    id?: string;
    prompt: string;
    explanation?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExerciseUpdateWithoutArticleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alternatives?: Prisma.AlternativeUpdateManyWithoutExerciseNestedInput;
};
export type ExerciseUncheckedUpdateWithoutArticleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alternatives?: Prisma.AlternativeUncheckedUpdateManyWithoutExerciseNestedInput;
};
export type ExerciseUncheckedUpdateManyWithoutArticleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExerciseCountOutputType = {
    alternatives: number;
};
export type ExerciseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alternatives?: boolean | ExerciseCountOutputTypeCountAlternativesArgs;
};
export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseCountOutputTypeSelect<ExtArgs> | null;
};
export type ExerciseCountOutputTypeCountAlternativesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlternativeWhereInput;
};
export type ExerciseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prompt?: boolean;
    explanation?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
    alternatives?: boolean | Prisma.Exercise$alternativesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExerciseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exercise"]>;
export type ExerciseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prompt?: boolean;
    explanation?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exercise"]>;
export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prompt?: boolean;
    explanation?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exercise"]>;
export type ExerciseSelectScalar = {
    id?: boolean;
    prompt?: boolean;
    explanation?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExerciseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "prompt" | "explanation" | "order" | "articleId" | "createdAt" | "updatedAt", ExtArgs["result"]["exercise"]>;
export type ExerciseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
    alternatives?: boolean | Prisma.Exercise$alternativesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExerciseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
};
export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
};
export type $ExercisePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Exercise";
    objects: {
        article: Prisma.$ArticlePayload<ExtArgs>;
        alternatives: Prisma.$AlternativePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        prompt: string;
        explanation: string | null;
        order: number;
        articleId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["exercise"]>;
    composites: {};
};
export type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExercisePayload, S>;
export type ExerciseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExerciseCountAggregateInputType | true;
};
export interface ExerciseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Exercise'];
        meta: {
            name: 'Exercise';
        };
    };
    findUnique<T extends ExerciseFindUniqueArgs>(args: Prisma.SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExerciseFindFirstArgs>(args?: Prisma.SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExerciseFindManyArgs>(args?: Prisma.SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExerciseCreateArgs>(args: Prisma.SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExerciseCreateManyArgs>(args?: Prisma.SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExerciseDeleteArgs>(args: Prisma.SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExerciseUpdateArgs>(args: Prisma.SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExerciseUpdateManyArgs>(args: Prisma.SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExerciseUpsertArgs>(args: Prisma.SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExerciseCountArgs>(args?: Prisma.Subset<T, ExerciseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExerciseCountAggregateOutputType> : number>;
    aggregate<T extends ExerciseAggregateArgs>(args: Prisma.Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>;
    groupBy<T extends ExerciseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExerciseGroupByArgs['orderBy'];
    } : {
        orderBy?: ExerciseGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExerciseFieldRefs;
}
export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    article<T extends Prisma.ArticleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ArticleDefaultArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    alternatives<T extends Prisma.Exercise$alternativesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Exercise$alternativesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExerciseFieldRefs {
    readonly id: Prisma.FieldRef<"Exercise", 'String'>;
    readonly prompt: Prisma.FieldRef<"Exercise", 'String'>;
    readonly explanation: Prisma.FieldRef<"Exercise", 'String'>;
    readonly order: Prisma.FieldRef<"Exercise", 'Int'>;
    readonly articleId: Prisma.FieldRef<"Exercise", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Exercise", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Exercise", 'DateTime'>;
}
export type ExerciseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where: Prisma.ExerciseWhereUniqueInput;
};
export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where: Prisma.ExerciseWhereUniqueInput;
};
export type ExerciseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where?: Prisma.ExerciseWhereInput;
    orderBy?: Prisma.ExerciseOrderByWithRelationInput | Prisma.ExerciseOrderByWithRelationInput[];
    cursor?: Prisma.ExerciseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExerciseScalarFieldEnum | Prisma.ExerciseScalarFieldEnum[];
};
export type ExerciseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where?: Prisma.ExerciseWhereInput;
    orderBy?: Prisma.ExerciseOrderByWithRelationInput | Prisma.ExerciseOrderByWithRelationInput[];
    cursor?: Prisma.ExerciseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExerciseScalarFieldEnum | Prisma.ExerciseScalarFieldEnum[];
};
export type ExerciseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where?: Prisma.ExerciseWhereInput;
    orderBy?: Prisma.ExerciseOrderByWithRelationInput | Prisma.ExerciseOrderByWithRelationInput[];
    cursor?: Prisma.ExerciseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExerciseScalarFieldEnum | Prisma.ExerciseScalarFieldEnum[];
};
export type ExerciseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExerciseCreateInput, Prisma.ExerciseUncheckedCreateInput>;
};
export type ExerciseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExerciseCreateManyInput | Prisma.ExerciseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExerciseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    data: Prisma.ExerciseCreateManyInput | Prisma.ExerciseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExerciseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExerciseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExerciseUpdateInput, Prisma.ExerciseUncheckedUpdateInput>;
    where: Prisma.ExerciseWhereUniqueInput;
};
export type ExerciseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExerciseUpdateManyMutationInput, Prisma.ExerciseUncheckedUpdateManyInput>;
    where?: Prisma.ExerciseWhereInput;
    limit?: number;
};
export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExerciseUpdateManyMutationInput, Prisma.ExerciseUncheckedUpdateManyInput>;
    where?: Prisma.ExerciseWhereInput;
    limit?: number;
    include?: Prisma.ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExerciseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where: Prisma.ExerciseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExerciseCreateInput, Prisma.ExerciseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExerciseUpdateInput, Prisma.ExerciseUncheckedUpdateInput>;
};
export type ExerciseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
    where: Prisma.ExerciseWhereUniqueInput;
};
export type ExerciseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExerciseWhereInput;
    limit?: number;
};
export type Exercise$alternativesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    where?: Prisma.AlternativeWhereInput;
    orderBy?: Prisma.AlternativeOrderByWithRelationInput | Prisma.AlternativeOrderByWithRelationInput[];
    cursor?: Prisma.AlternativeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlternativeScalarFieldEnum | Prisma.AlternativeScalarFieldEnum[];
};
export type ExerciseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExerciseSelect<ExtArgs> | null;
    omit?: Prisma.ExerciseOmit<ExtArgs> | null;
    include?: Prisma.ExerciseInclude<ExtArgs> | null;
};
