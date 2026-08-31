import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ArticleModel = runtime.Types.Result.DefaultSelection<Prisma.$ArticlePayload>;
export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
};
export type ArticleAvgAggregateOutputType = {
    order: number | null;
};
export type ArticleSumAggregateOutputType = {
    order: number | null;
};
export type ArticleMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    summary: string | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArticleMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    summary: string | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArticleCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    content: number;
    summary: number;
    order: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ArticleAvgAggregateInputType = {
    order?: true;
};
export type ArticleSumAggregateInputType = {
    order?: true;
};
export type ArticleMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    summary?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArticleMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    summary?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArticleCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    summary?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ArticleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ArticleCountAggregateInputType;
    _avg?: ArticleAvgAggregateInputType;
    _sum?: ArticleSumAggregateInputType;
    _min?: ArticleMinAggregateInputType;
    _max?: ArticleMaxAggregateInputType;
};
export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
    [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArticle[P]> : Prisma.GetScalarType<T[P], AggregateArticle[P]>;
};
export type ArticleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithAggregationInput | Prisma.ArticleOrderByWithAggregationInput[];
    by: Prisma.ArticleScalarFieldEnum[] | Prisma.ArticleScalarFieldEnum;
    having?: Prisma.ArticleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleCountAggregateInputType | true;
    _avg?: ArticleAvgAggregateInputType;
    _sum?: ArticleSumAggregateInputType;
    _min?: ArticleMinAggregateInputType;
    _max?: ArticleMaxAggregateInputType;
};
export type ArticleGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    content: string;
    summary: string | null;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
};
export type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ArticleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ArticleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ArticleGroupByOutputType[P]>;
}>>;
export type ArticleWhereInput = {
    AND?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    OR?: Prisma.ArticleWhereInput[];
    NOT?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    id?: Prisma.StringFilter<"Article"> | string;
    title?: Prisma.StringFilter<"Article"> | string;
    slug?: Prisma.StringFilter<"Article"> | string;
    content?: Prisma.StringFilter<"Article"> | string;
    summary?: Prisma.StringNullableFilter<"Article"> | string | null;
    order?: Prisma.IntFilter<"Article"> | number;
    createdAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    videos?: Prisma.VideoListRelationFilter;
    exercises?: Prisma.ExerciseListRelationFilter;
};
export type ArticleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    videos?: Prisma.VideoOrderByRelationAggregateInput;
    exercises?: Prisma.ExerciseOrderByRelationAggregateInput;
};
export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    OR?: Prisma.ArticleWhereInput[];
    NOT?: Prisma.ArticleWhereInput | Prisma.ArticleWhereInput[];
    title?: Prisma.StringFilter<"Article"> | string;
    content?: Prisma.StringFilter<"Article"> | string;
    summary?: Prisma.StringNullableFilter<"Article"> | string | null;
    order?: Prisma.IntFilter<"Article"> | number;
    createdAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Article"> | Date | string;
    videos?: Prisma.VideoListRelationFilter;
    exercises?: Prisma.ExerciseListRelationFilter;
}, "id" | "slug">;
export type ArticleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ArticleCountOrderByAggregateInput;
    _avg?: Prisma.ArticleAvgOrderByAggregateInput;
    _max?: Prisma.ArticleMaxOrderByAggregateInput;
    _min?: Prisma.ArticleMinOrderByAggregateInput;
    _sum?: Prisma.ArticleSumOrderByAggregateInput;
};
export type ArticleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ArticleScalarWhereWithAggregatesInput | Prisma.ArticleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ArticleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ArticleScalarWhereWithAggregatesInput | Prisma.ArticleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Article"> | string;
    summary?: Prisma.StringNullableWithAggregatesFilter<"Article"> | string | null;
    order?: Prisma.IntWithAggregatesFilter<"Article"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Article"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Article"> | Date | string;
};
export type ArticleCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    videos?: Prisma.VideoCreateNestedManyWithoutArticleInput;
    exercises?: Prisma.ExerciseCreateNestedManyWithoutArticleInput;
};
export type ArticleUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    videos?: Prisma.VideoUncheckedCreateNestedManyWithoutArticleInput;
    exercises?: Prisma.ExerciseUncheckedCreateNestedManyWithoutArticleInput;
};
export type ArticleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    videos?: Prisma.VideoUpdateManyWithoutArticleNestedInput;
    exercises?: Prisma.ExerciseUpdateManyWithoutArticleNestedInput;
};
export type ArticleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    videos?: Prisma.VideoUncheckedUpdateManyWithoutArticleNestedInput;
    exercises?: Prisma.ExerciseUncheckedUpdateManyWithoutArticleNestedInput;
};
export type ArticleCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArticleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArticleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArticleAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ArticleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArticleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArticleSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ArticleScalarRelationFilter = {
    is?: Prisma.ArticleWhereInput;
    isNot?: Prisma.ArticleWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ArticleCreateNestedOneWithoutVideosInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutVideosInput, Prisma.ArticleUncheckedCreateWithoutVideosInput>;
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutVideosInput;
    connect?: Prisma.ArticleWhereUniqueInput;
};
export type ArticleUpdateOneRequiredWithoutVideosNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutVideosInput, Prisma.ArticleUncheckedCreateWithoutVideosInput>;
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutVideosInput;
    upsert?: Prisma.ArticleUpsertWithoutVideosInput;
    connect?: Prisma.ArticleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArticleUpdateToOneWithWhereWithoutVideosInput, Prisma.ArticleUpdateWithoutVideosInput>, Prisma.ArticleUncheckedUpdateWithoutVideosInput>;
};
export type ArticleCreateNestedOneWithoutExercisesInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutExercisesInput, Prisma.ArticleUncheckedCreateWithoutExercisesInput>;
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutExercisesInput;
    connect?: Prisma.ArticleWhereUniqueInput;
};
export type ArticleUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleCreateWithoutExercisesInput, Prisma.ArticleUncheckedCreateWithoutExercisesInput>;
    connectOrCreate?: Prisma.ArticleCreateOrConnectWithoutExercisesInput;
    upsert?: Prisma.ArticleUpsertWithoutExercisesInput;
    connect?: Prisma.ArticleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArticleUpdateToOneWithWhereWithoutExercisesInput, Prisma.ArticleUpdateWithoutExercisesInput>, Prisma.ArticleUncheckedUpdateWithoutExercisesInput>;
};
export type ArticleCreateWithoutVideosInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    exercises?: Prisma.ExerciseCreateNestedManyWithoutArticleInput;
};
export type ArticleUncheckedCreateWithoutVideosInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    exercises?: Prisma.ExerciseUncheckedCreateNestedManyWithoutArticleInput;
};
export type ArticleCreateOrConnectWithoutVideosInput = {
    where: Prisma.ArticleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleCreateWithoutVideosInput, Prisma.ArticleUncheckedCreateWithoutVideosInput>;
};
export type ArticleUpsertWithoutVideosInput = {
    update: Prisma.XOR<Prisma.ArticleUpdateWithoutVideosInput, Prisma.ArticleUncheckedUpdateWithoutVideosInput>;
    create: Prisma.XOR<Prisma.ArticleCreateWithoutVideosInput, Prisma.ArticleUncheckedCreateWithoutVideosInput>;
    where?: Prisma.ArticleWhereInput;
};
export type ArticleUpdateToOneWithWhereWithoutVideosInput = {
    where?: Prisma.ArticleWhereInput;
    data: Prisma.XOR<Prisma.ArticleUpdateWithoutVideosInput, Prisma.ArticleUncheckedUpdateWithoutVideosInput>;
};
export type ArticleUpdateWithoutVideosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exercises?: Prisma.ExerciseUpdateManyWithoutArticleNestedInput;
};
export type ArticleUncheckedUpdateWithoutVideosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exercises?: Prisma.ExerciseUncheckedUpdateManyWithoutArticleNestedInput;
};
export type ArticleCreateWithoutExercisesInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    videos?: Prisma.VideoCreateNestedManyWithoutArticleInput;
};
export type ArticleUncheckedCreateWithoutExercisesInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    summary?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    videos?: Prisma.VideoUncheckedCreateNestedManyWithoutArticleInput;
};
export type ArticleCreateOrConnectWithoutExercisesInput = {
    where: Prisma.ArticleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleCreateWithoutExercisesInput, Prisma.ArticleUncheckedCreateWithoutExercisesInput>;
};
export type ArticleUpsertWithoutExercisesInput = {
    update: Prisma.XOR<Prisma.ArticleUpdateWithoutExercisesInput, Prisma.ArticleUncheckedUpdateWithoutExercisesInput>;
    create: Prisma.XOR<Prisma.ArticleCreateWithoutExercisesInput, Prisma.ArticleUncheckedCreateWithoutExercisesInput>;
    where?: Prisma.ArticleWhereInput;
};
export type ArticleUpdateToOneWithWhereWithoutExercisesInput = {
    where?: Prisma.ArticleWhereInput;
    data: Prisma.XOR<Prisma.ArticleUpdateWithoutExercisesInput, Prisma.ArticleUncheckedUpdateWithoutExercisesInput>;
};
export type ArticleUpdateWithoutExercisesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    videos?: Prisma.VideoUpdateManyWithoutArticleNestedInput;
};
export type ArticleUncheckedUpdateWithoutExercisesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    videos?: Prisma.VideoUncheckedUpdateManyWithoutArticleNestedInput;
};
export type ArticleCountOutputType = {
    videos: number;
    exercises: number;
};
export type ArticleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    videos?: boolean | ArticleCountOutputTypeCountVideosArgs;
    exercises?: boolean | ArticleCountOutputTypeCountExercisesArgs;
};
export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleCountOutputTypeSelect<ExtArgs> | null;
};
export type ArticleCountOutputTypeCountVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
};
export type ArticleCountOutputTypeCountExercisesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExerciseWhereInput;
};
export type ArticleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    summary?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    videos?: boolean | Prisma.Article$videosArgs<ExtArgs>;
    exercises?: boolean | Prisma.Article$exercisesArgs<ExtArgs>;
    _count?: boolean | Prisma.ArticleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["article"]>;
export type ArticleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    summary?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["article"]>;
export type ArticleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    summary?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["article"]>;
export type ArticleSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    summary?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ArticleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "content" | "summary" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>;
export type ArticleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    videos?: boolean | Prisma.Article$videosArgs<ExtArgs>;
    exercises?: boolean | Prisma.Article$exercisesArgs<ExtArgs>;
    _count?: boolean | Prisma.ArticleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ArticleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ArticlePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Article";
    objects: {
        videos: Prisma.$VideoPayload<ExtArgs>[];
        exercises: Prisma.$ExercisePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        content: string;
        summary: string | null;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["article"]>;
    composites: {};
};
export type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArticlePayload, S>;
export type ArticleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArticleCountAggregateInputType | true;
};
export interface ArticleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Article'];
        meta: {
            name: 'Article';
        };
    };
    findUnique<T extends ArticleFindUniqueArgs>(args: Prisma.SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ArticleFindFirstArgs>(args?: Prisma.SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ArticleFindManyArgs>(args?: Prisma.SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ArticleCreateArgs>(args: Prisma.SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ArticleCreateManyArgs>(args?: Prisma.SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ArticleDeleteArgs>(args: Prisma.SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ArticleUpdateArgs>(args: Prisma.SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ArticleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ArticleUpdateManyArgs>(args: Prisma.SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ArticleUpsertArgs>(args: Prisma.SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ArticleCountArgs>(args?: Prisma.Subset<T, ArticleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ArticleCountAggregateOutputType> : number>;
    aggregate<T extends ArticleAggregateArgs>(args: Prisma.Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>;
    groupBy<T extends ArticleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ArticleGroupByArgs['orderBy'];
    } : {
        orderBy?: ArticleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ArticleFieldRefs;
}
export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    videos<T extends Prisma.Article$videosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Article$videosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    exercises<T extends Prisma.Article$exercisesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Article$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ArticleFieldRefs {
    readonly id: Prisma.FieldRef<"Article", 'String'>;
    readonly title: Prisma.FieldRef<"Article", 'String'>;
    readonly slug: Prisma.FieldRef<"Article", 'String'>;
    readonly content: Prisma.FieldRef<"Article", 'String'>;
    readonly summary: Prisma.FieldRef<"Article", 'String'>;
    readonly order: Prisma.FieldRef<"Article", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Article", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Article", 'DateTime'>;
}
export type ArticleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[];
};
export type ArticleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[];
};
export type ArticleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput | Prisma.ArticleOrderByWithRelationInput[];
    cursor?: Prisma.ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleScalarFieldEnum | Prisma.ArticleScalarFieldEnum[];
};
export type ArticleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleCreateInput, Prisma.ArticleUncheckedCreateInput>;
};
export type ArticleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ArticleCreateManyInput | Prisma.ArticleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ArticleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    data: Prisma.ArticleCreateManyInput | Prisma.ArticleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ArticleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleUpdateInput, Prisma.ArticleUncheckedUpdateInput>;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyInput>;
    where?: Prisma.ArticleWhereInput;
    limit?: number;
};
export type ArticleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleUpdateManyMutationInput, Prisma.ArticleUncheckedUpdateManyInput>;
    where?: Prisma.ArticleWhereInput;
    limit?: number;
};
export type ArticleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleCreateInput, Prisma.ArticleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ArticleUpdateInput, Prisma.ArticleUncheckedUpdateInput>;
};
export type ArticleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
    where: Prisma.ArticleWhereUniqueInput;
};
export type ArticleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleWhereInput;
    limit?: number;
};
export type Article$videosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    cursor?: Prisma.VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
export type Article$exercisesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ArticleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleSelect<ExtArgs> | null;
    omit?: Prisma.ArticleOmit<ExtArgs> | null;
    include?: Prisma.ArticleInclude<ExtArgs> | null;
};
