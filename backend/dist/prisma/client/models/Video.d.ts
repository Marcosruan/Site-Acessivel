import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VideoModel = runtime.Types.Result.DefaultSelection<Prisma.$VideoPayload>;
export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null;
    _avg: VideoAvgAggregateOutputType | null;
    _sum: VideoSumAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
};
export type VideoAvgAggregateOutputType = {
    order: number | null;
};
export type VideoSumAggregateOutputType = {
    order: number | null;
};
export type VideoMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    url: string | null;
    description: string | null;
    order: number | null;
    articleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VideoMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    url: string | null;
    description: string | null;
    order: number | null;
    articleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VideoCountAggregateOutputType = {
    id: number;
    title: number;
    url: number;
    description: number;
    order: number;
    articleId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VideoAvgAggregateInputType = {
    order?: true;
};
export type VideoSumAggregateInputType = {
    order?: true;
};
export type VideoMinAggregateInputType = {
    id?: true;
    title?: true;
    url?: true;
    description?: true;
    order?: true;
    articleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VideoMaxAggregateInputType = {
    id?: true;
    title?: true;
    url?: true;
    description?: true;
    order?: true;
    articleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VideoCountAggregateInputType = {
    id?: true;
    title?: true;
    url?: true;
    description?: true;
    order?: true;
    articleId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VideoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    cursor?: Prisma.VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VideoCountAggregateInputType;
    _avg?: VideoAvgAggregateInputType;
    _sum?: VideoSumAggregateInputType;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
};
export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVideo[P]> : Prisma.GetScalarType<T[P], AggregateVideo[P]>;
};
export type VideoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithAggregationInput | Prisma.VideoOrderByWithAggregationInput[];
    by: Prisma.VideoScalarFieldEnum[] | Prisma.VideoScalarFieldEnum;
    having?: Prisma.VideoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoCountAggregateInputType | true;
    _avg?: VideoAvgAggregateInputType;
    _sum?: VideoSumAggregateInputType;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
};
export type VideoGroupByOutputType = {
    id: string;
    title: string;
    url: string;
    description: string | null;
    order: number;
    articleId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: VideoCountAggregateOutputType | null;
    _avg: VideoAvgAggregateOutputType | null;
    _sum: VideoSumAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
};
export type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VideoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]>;
}>>;
export type VideoWhereInput = {
    AND?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    OR?: Prisma.VideoWhereInput[];
    NOT?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    id?: Prisma.StringFilter<"Video"> | string;
    title?: Prisma.StringFilter<"Video"> | string;
    url?: Prisma.StringFilter<"Video"> | string;
    description?: Prisma.StringNullableFilter<"Video"> | string | null;
    order?: Prisma.IntFilter<"Video"> | number;
    articleId?: Prisma.StringFilter<"Video"> | string;
    createdAt?: Prisma.DateTimeFilter<"Video"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Video"> | Date | string;
    article?: Prisma.XOR<Prisma.ArticleScalarRelationFilter, Prisma.ArticleWhereInput>;
};
export type VideoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    article?: Prisma.ArticleOrderByWithRelationInput;
};
export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    OR?: Prisma.VideoWhereInput[];
    NOT?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    title?: Prisma.StringFilter<"Video"> | string;
    url?: Prisma.StringFilter<"Video"> | string;
    description?: Prisma.StringNullableFilter<"Video"> | string | null;
    order?: Prisma.IntFilter<"Video"> | number;
    articleId?: Prisma.StringFilter<"Video"> | string;
    createdAt?: Prisma.DateTimeFilter<"Video"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Video"> | Date | string;
    article?: Prisma.XOR<Prisma.ArticleScalarRelationFilter, Prisma.ArticleWhereInput>;
}, "id">;
export type VideoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VideoCountOrderByAggregateInput;
    _avg?: Prisma.VideoAvgOrderByAggregateInput;
    _max?: Prisma.VideoMaxOrderByAggregateInput;
    _min?: Prisma.VideoMinOrderByAggregateInput;
    _sum?: Prisma.VideoSumOrderByAggregateInput;
};
export type VideoScalarWhereWithAggregatesInput = {
    AND?: Prisma.VideoScalarWhereWithAggregatesInput | Prisma.VideoScalarWhereWithAggregatesInput[];
    OR?: Prisma.VideoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VideoScalarWhereWithAggregatesInput | Prisma.VideoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    url?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Video"> | string | null;
    order?: Prisma.IntWithAggregatesFilter<"Video"> | number;
    articleId?: Prisma.StringWithAggregatesFilter<"Video"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Video"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Video"> | Date | string;
};
export type VideoCreateInput = {
    id?: string;
    title: string;
    url: string;
    description?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    article: Prisma.ArticleCreateNestedOneWithoutVideosInput;
};
export type VideoUncheckedCreateInput = {
    id?: string;
    title: string;
    url: string;
    description?: string | null;
    order?: number;
    articleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VideoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    article?: Prisma.ArticleUpdateOneRequiredWithoutVideosNestedInput;
};
export type VideoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VideoCreateManyInput = {
    id?: string;
    title: string;
    url: string;
    description?: string | null;
    order?: number;
    articleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VideoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VideoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VideoListRelationFilter = {
    every?: Prisma.VideoWhereInput;
    some?: Prisma.VideoWhereInput;
    none?: Prisma.VideoWhereInput;
};
export type VideoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VideoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VideoAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type VideoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VideoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VideoSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type VideoCreateNestedManyWithoutArticleInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutArticleInput, Prisma.VideoUncheckedCreateWithoutArticleInput> | Prisma.VideoCreateWithoutArticleInput[] | Prisma.VideoUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutArticleInput | Prisma.VideoCreateOrConnectWithoutArticleInput[];
    createMany?: Prisma.VideoCreateManyArticleInputEnvelope;
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUncheckedCreateNestedManyWithoutArticleInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutArticleInput, Prisma.VideoUncheckedCreateWithoutArticleInput> | Prisma.VideoCreateWithoutArticleInput[] | Prisma.VideoUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutArticleInput | Prisma.VideoCreateOrConnectWithoutArticleInput[];
    createMany?: Prisma.VideoCreateManyArticleInputEnvelope;
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUpdateManyWithoutArticleNestedInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutArticleInput, Prisma.VideoUncheckedCreateWithoutArticleInput> | Prisma.VideoCreateWithoutArticleInput[] | Prisma.VideoUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutArticleInput | Prisma.VideoCreateOrConnectWithoutArticleInput[];
    upsert?: Prisma.VideoUpsertWithWhereUniqueWithoutArticleInput | Prisma.VideoUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: Prisma.VideoCreateManyArticleInputEnvelope;
    set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    update?: Prisma.VideoUpdateWithWhereUniqueWithoutArticleInput | Prisma.VideoUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?: Prisma.VideoUpdateManyWithWhereWithoutArticleInput | Prisma.VideoUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: Prisma.XOR<Prisma.VideoCreateWithoutArticleInput, Prisma.VideoUncheckedCreateWithoutArticleInput> | Prisma.VideoCreateWithoutArticleInput[] | Prisma.VideoUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.VideoCreateOrConnectWithoutArticleInput | Prisma.VideoCreateOrConnectWithoutArticleInput[];
    upsert?: Prisma.VideoUpsertWithWhereUniqueWithoutArticleInput | Prisma.VideoUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: Prisma.VideoCreateManyArticleInputEnvelope;
    set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
    update?: Prisma.VideoUpdateWithWhereUniqueWithoutArticleInput | Prisma.VideoUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?: Prisma.VideoUpdateManyWithWhereWithoutArticleInput | Prisma.VideoUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoCreateWithoutArticleInput = {
    id?: string;
    title: string;
    url: string;
    description?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VideoUncheckedCreateWithoutArticleInput = {
    id?: string;
    title: string;
    url: string;
    description?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VideoCreateOrConnectWithoutArticleInput = {
    where: Prisma.VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoCreateWithoutArticleInput, Prisma.VideoUncheckedCreateWithoutArticleInput>;
};
export type VideoCreateManyArticleInputEnvelope = {
    data: Prisma.VideoCreateManyArticleInput | Prisma.VideoCreateManyArticleInput[];
    skipDuplicates?: boolean;
};
export type VideoUpsertWithWhereUniqueWithoutArticleInput = {
    where: Prisma.VideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VideoUpdateWithoutArticleInput, Prisma.VideoUncheckedUpdateWithoutArticleInput>;
    create: Prisma.XOR<Prisma.VideoCreateWithoutArticleInput, Prisma.VideoUncheckedCreateWithoutArticleInput>;
};
export type VideoUpdateWithWhereUniqueWithoutArticleInput = {
    where: Prisma.VideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VideoUpdateWithoutArticleInput, Prisma.VideoUncheckedUpdateWithoutArticleInput>;
};
export type VideoUpdateManyWithWhereWithoutArticleInput = {
    where: Prisma.VideoScalarWhereInput;
    data: Prisma.XOR<Prisma.VideoUpdateManyMutationInput, Prisma.VideoUncheckedUpdateManyWithoutArticleInput>;
};
export type VideoScalarWhereInput = {
    AND?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
    OR?: Prisma.VideoScalarWhereInput[];
    NOT?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
    id?: Prisma.StringFilter<"Video"> | string;
    title?: Prisma.StringFilter<"Video"> | string;
    url?: Prisma.StringFilter<"Video"> | string;
    description?: Prisma.StringNullableFilter<"Video"> | string | null;
    order?: Prisma.IntFilter<"Video"> | number;
    articleId?: Prisma.StringFilter<"Video"> | string;
    createdAt?: Prisma.DateTimeFilter<"Video"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Video"> | Date | string;
};
export type VideoCreateManyArticleInput = {
    id?: string;
    title: string;
    url: string;
    description?: string | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VideoUpdateWithoutArticleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VideoUncheckedUpdateWithoutArticleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VideoUncheckedUpdateManyWithoutArticleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VideoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    url?: boolean;
    description?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type VideoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    url?: boolean;
    description?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type VideoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    url?: boolean;
    description?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type VideoSelectScalar = {
    id?: boolean;
    title?: boolean;
    url?: boolean;
    description?: boolean;
    order?: boolean;
    articleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VideoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "url" | "description" | "order" | "articleId" | "createdAt" | "updatedAt", ExtArgs["result"]["video"]>;
export type VideoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
};
export type VideoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
};
export type VideoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
};
export type $VideoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Video";
    objects: {
        article: Prisma.$ArticlePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        url: string;
        description: string | null;
        order: number;
        articleId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["video"]>;
    composites: {};
};
export type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VideoPayload, S>;
export type VideoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VideoCountAggregateInputType | true;
};
export interface VideoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Video'];
        meta: {
            name: 'Video';
        };
    };
    findUnique<T extends VideoFindUniqueArgs>(args: Prisma.SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VideoFindFirstArgs>(args?: Prisma.SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VideoFindManyArgs>(args?: Prisma.SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VideoCreateArgs>(args: Prisma.SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VideoCreateManyArgs>(args?: Prisma.SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VideoDeleteArgs>(args: Prisma.SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VideoUpdateArgs>(args: Prisma.SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VideoDeleteManyArgs>(args?: Prisma.SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VideoUpdateManyArgs>(args: Prisma.SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VideoUpsertArgs>(args: Prisma.SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VideoCountArgs>(args?: Prisma.Subset<T, VideoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VideoCountAggregateOutputType> : number>;
    aggregate<T extends VideoAggregateArgs>(args: Prisma.Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>;
    groupBy<T extends VideoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VideoGroupByArgs['orderBy'];
    } : {
        orderBy?: VideoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VideoFieldRefs;
}
export interface Prisma__VideoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    article<T extends Prisma.ArticleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ArticleDefaultArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VideoFieldRefs {
    readonly id: Prisma.FieldRef<"Video", 'String'>;
    readonly title: Prisma.FieldRef<"Video", 'String'>;
    readonly url: Prisma.FieldRef<"Video", 'String'>;
    readonly description: Prisma.FieldRef<"Video", 'String'>;
    readonly order: Prisma.FieldRef<"Video", 'Int'>;
    readonly articleId: Prisma.FieldRef<"Video", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Video", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Video", 'DateTime'>;
}
export type VideoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where: Prisma.VideoWhereUniqueInput;
};
export type VideoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where: Prisma.VideoWhereUniqueInput;
};
export type VideoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VideoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VideoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VideoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VideoCreateInput, Prisma.VideoUncheckedCreateInput>;
};
export type VideoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VideoCreateManyInput | Prisma.VideoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VideoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    data: Prisma.VideoCreateManyInput | Prisma.VideoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VideoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VideoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VideoUpdateInput, Prisma.VideoUncheckedUpdateInput>;
    where: Prisma.VideoWhereUniqueInput;
};
export type VideoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VideoUpdateManyMutationInput, Prisma.VideoUncheckedUpdateManyInput>;
    where?: Prisma.VideoWhereInput;
    limit?: number;
};
export type VideoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VideoUpdateManyMutationInput, Prisma.VideoUncheckedUpdateManyInput>;
    where?: Prisma.VideoWhereInput;
    limit?: number;
    include?: Prisma.VideoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VideoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where: Prisma.VideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoCreateInput, Prisma.VideoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VideoUpdateInput, Prisma.VideoUncheckedUpdateInput>;
};
export type VideoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where: Prisma.VideoWhereUniqueInput;
};
export type VideoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
    limit?: number;
};
export type VideoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VideoSelect<ExtArgs> | null;
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    include?: Prisma.VideoInclude<ExtArgs> | null;
};
