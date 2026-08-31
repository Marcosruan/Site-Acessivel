import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AlternativeModel = runtime.Types.Result.DefaultSelection<Prisma.$AlternativePayload>;
export type AggregateAlternative = {
    _count: AlternativeCountAggregateOutputType | null;
    _avg: AlternativeAvgAggregateOutputType | null;
    _sum: AlternativeSumAggregateOutputType | null;
    _min: AlternativeMinAggregateOutputType | null;
    _max: AlternativeMaxAggregateOutputType | null;
};
export type AlternativeAvgAggregateOutputType = {
    order: number | null;
};
export type AlternativeSumAggregateOutputType = {
    order: number | null;
};
export type AlternativeMinAggregateOutputType = {
    id: string | null;
    text: string | null;
    isCorrect: boolean | null;
    order: number | null;
    exerciseId: string | null;
};
export type AlternativeMaxAggregateOutputType = {
    id: string | null;
    text: string | null;
    isCorrect: boolean | null;
    order: number | null;
    exerciseId: string | null;
};
export type AlternativeCountAggregateOutputType = {
    id: number;
    text: number;
    isCorrect: number;
    order: number;
    exerciseId: number;
    _all: number;
};
export type AlternativeAvgAggregateInputType = {
    order?: true;
};
export type AlternativeSumAggregateInputType = {
    order?: true;
};
export type AlternativeMinAggregateInputType = {
    id?: true;
    text?: true;
    isCorrect?: true;
    order?: true;
    exerciseId?: true;
};
export type AlternativeMaxAggregateInputType = {
    id?: true;
    text?: true;
    isCorrect?: true;
    order?: true;
    exerciseId?: true;
};
export type AlternativeCountAggregateInputType = {
    id?: true;
    text?: true;
    isCorrect?: true;
    order?: true;
    exerciseId?: true;
    _all?: true;
};
export type AlternativeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlternativeWhereInput;
    orderBy?: Prisma.AlternativeOrderByWithRelationInput | Prisma.AlternativeOrderByWithRelationInput[];
    cursor?: Prisma.AlternativeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AlternativeCountAggregateInputType;
    _avg?: AlternativeAvgAggregateInputType;
    _sum?: AlternativeSumAggregateInputType;
    _min?: AlternativeMinAggregateInputType;
    _max?: AlternativeMaxAggregateInputType;
};
export type GetAlternativeAggregateType<T extends AlternativeAggregateArgs> = {
    [P in keyof T & keyof AggregateAlternative]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlternative[P]> : Prisma.GetScalarType<T[P], AggregateAlternative[P]>;
};
export type AlternativeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlternativeWhereInput;
    orderBy?: Prisma.AlternativeOrderByWithAggregationInput | Prisma.AlternativeOrderByWithAggregationInput[];
    by: Prisma.AlternativeScalarFieldEnum[] | Prisma.AlternativeScalarFieldEnum;
    having?: Prisma.AlternativeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlternativeCountAggregateInputType | true;
    _avg?: AlternativeAvgAggregateInputType;
    _sum?: AlternativeSumAggregateInputType;
    _min?: AlternativeMinAggregateInputType;
    _max?: AlternativeMaxAggregateInputType;
};
export type AlternativeGroupByOutputType = {
    id: string;
    text: string;
    isCorrect: boolean;
    order: number;
    exerciseId: string;
    _count: AlternativeCountAggregateOutputType | null;
    _avg: AlternativeAvgAggregateOutputType | null;
    _sum: AlternativeSumAggregateOutputType | null;
    _min: AlternativeMinAggregateOutputType | null;
    _max: AlternativeMaxAggregateOutputType | null;
};
export type GetAlternativeGroupByPayload<T extends AlternativeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlternativeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlternativeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlternativeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlternativeGroupByOutputType[P]>;
}>>;
export type AlternativeWhereInput = {
    AND?: Prisma.AlternativeWhereInput | Prisma.AlternativeWhereInput[];
    OR?: Prisma.AlternativeWhereInput[];
    NOT?: Prisma.AlternativeWhereInput | Prisma.AlternativeWhereInput[];
    id?: Prisma.StringFilter<"Alternative"> | string;
    text?: Prisma.StringFilter<"Alternative"> | string;
    isCorrect?: Prisma.BoolFilter<"Alternative"> | boolean;
    order?: Prisma.IntFilter<"Alternative"> | number;
    exerciseId?: Prisma.StringFilter<"Alternative"> | string;
    exercise?: Prisma.XOR<Prisma.ExerciseScalarRelationFilter, Prisma.ExerciseWhereInput>;
};
export type AlternativeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    exerciseId?: Prisma.SortOrder;
    exercise?: Prisma.ExerciseOrderByWithRelationInput;
};
export type AlternativeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AlternativeWhereInput | Prisma.AlternativeWhereInput[];
    OR?: Prisma.AlternativeWhereInput[];
    NOT?: Prisma.AlternativeWhereInput | Prisma.AlternativeWhereInput[];
    text?: Prisma.StringFilter<"Alternative"> | string;
    isCorrect?: Prisma.BoolFilter<"Alternative"> | boolean;
    order?: Prisma.IntFilter<"Alternative"> | number;
    exerciseId?: Prisma.StringFilter<"Alternative"> | string;
    exercise?: Prisma.XOR<Prisma.ExerciseScalarRelationFilter, Prisma.ExerciseWhereInput>;
}, "id">;
export type AlternativeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    exerciseId?: Prisma.SortOrder;
    _count?: Prisma.AlternativeCountOrderByAggregateInput;
    _avg?: Prisma.AlternativeAvgOrderByAggregateInput;
    _max?: Prisma.AlternativeMaxOrderByAggregateInput;
    _min?: Prisma.AlternativeMinOrderByAggregateInput;
    _sum?: Prisma.AlternativeSumOrderByAggregateInput;
};
export type AlternativeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlternativeScalarWhereWithAggregatesInput | Prisma.AlternativeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlternativeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlternativeScalarWhereWithAggregatesInput | Prisma.AlternativeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Alternative"> | string;
    text?: Prisma.StringWithAggregatesFilter<"Alternative"> | string;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"Alternative"> | boolean;
    order?: Prisma.IntWithAggregatesFilter<"Alternative"> | number;
    exerciseId?: Prisma.StringWithAggregatesFilter<"Alternative"> | string;
};
export type AlternativeCreateInput = {
    id?: string;
    text: string;
    isCorrect?: boolean;
    order?: number;
    exercise: Prisma.ExerciseCreateNestedOneWithoutAlternativesInput;
};
export type AlternativeUncheckedCreateInput = {
    id?: string;
    text: string;
    isCorrect?: boolean;
    order?: number;
    exerciseId: string;
};
export type AlternativeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise?: Prisma.ExerciseUpdateOneRequiredWithoutAlternativesNestedInput;
};
export type AlternativeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    exerciseId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AlternativeCreateManyInput = {
    id?: string;
    text: string;
    isCorrect?: boolean;
    order?: number;
    exerciseId: string;
};
export type AlternativeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AlternativeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    exerciseId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AlternativeListRelationFilter = {
    every?: Prisma.AlternativeWhereInput;
    some?: Prisma.AlternativeWhereInput;
    none?: Prisma.AlternativeWhereInput;
};
export type AlternativeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AlternativeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    exerciseId?: Prisma.SortOrder;
};
export type AlternativeAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type AlternativeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    exerciseId?: Prisma.SortOrder;
};
export type AlternativeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    exerciseId?: Prisma.SortOrder;
};
export type AlternativeSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type AlternativeCreateNestedManyWithoutExerciseInput = {
    create?: Prisma.XOR<Prisma.AlternativeCreateWithoutExerciseInput, Prisma.AlternativeUncheckedCreateWithoutExerciseInput> | Prisma.AlternativeCreateWithoutExerciseInput[] | Prisma.AlternativeUncheckedCreateWithoutExerciseInput[];
    connectOrCreate?: Prisma.AlternativeCreateOrConnectWithoutExerciseInput | Prisma.AlternativeCreateOrConnectWithoutExerciseInput[];
    createMany?: Prisma.AlternativeCreateManyExerciseInputEnvelope;
    connect?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
};
export type AlternativeUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: Prisma.XOR<Prisma.AlternativeCreateWithoutExerciseInput, Prisma.AlternativeUncheckedCreateWithoutExerciseInput> | Prisma.AlternativeCreateWithoutExerciseInput[] | Prisma.AlternativeUncheckedCreateWithoutExerciseInput[];
    connectOrCreate?: Prisma.AlternativeCreateOrConnectWithoutExerciseInput | Prisma.AlternativeCreateOrConnectWithoutExerciseInput[];
    createMany?: Prisma.AlternativeCreateManyExerciseInputEnvelope;
    connect?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
};
export type AlternativeUpdateManyWithoutExerciseNestedInput = {
    create?: Prisma.XOR<Prisma.AlternativeCreateWithoutExerciseInput, Prisma.AlternativeUncheckedCreateWithoutExerciseInput> | Prisma.AlternativeCreateWithoutExerciseInput[] | Prisma.AlternativeUncheckedCreateWithoutExerciseInput[];
    connectOrCreate?: Prisma.AlternativeCreateOrConnectWithoutExerciseInput | Prisma.AlternativeCreateOrConnectWithoutExerciseInput[];
    upsert?: Prisma.AlternativeUpsertWithWhereUniqueWithoutExerciseInput | Prisma.AlternativeUpsertWithWhereUniqueWithoutExerciseInput[];
    createMany?: Prisma.AlternativeCreateManyExerciseInputEnvelope;
    set?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    disconnect?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    delete?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    connect?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    update?: Prisma.AlternativeUpdateWithWhereUniqueWithoutExerciseInput | Prisma.AlternativeUpdateWithWhereUniqueWithoutExerciseInput[];
    updateMany?: Prisma.AlternativeUpdateManyWithWhereWithoutExerciseInput | Prisma.AlternativeUpdateManyWithWhereWithoutExerciseInput[];
    deleteMany?: Prisma.AlternativeScalarWhereInput | Prisma.AlternativeScalarWhereInput[];
};
export type AlternativeUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: Prisma.XOR<Prisma.AlternativeCreateWithoutExerciseInput, Prisma.AlternativeUncheckedCreateWithoutExerciseInput> | Prisma.AlternativeCreateWithoutExerciseInput[] | Prisma.AlternativeUncheckedCreateWithoutExerciseInput[];
    connectOrCreate?: Prisma.AlternativeCreateOrConnectWithoutExerciseInput | Prisma.AlternativeCreateOrConnectWithoutExerciseInput[];
    upsert?: Prisma.AlternativeUpsertWithWhereUniqueWithoutExerciseInput | Prisma.AlternativeUpsertWithWhereUniqueWithoutExerciseInput[];
    createMany?: Prisma.AlternativeCreateManyExerciseInputEnvelope;
    set?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    disconnect?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    delete?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    connect?: Prisma.AlternativeWhereUniqueInput | Prisma.AlternativeWhereUniqueInput[];
    update?: Prisma.AlternativeUpdateWithWhereUniqueWithoutExerciseInput | Prisma.AlternativeUpdateWithWhereUniqueWithoutExerciseInput[];
    updateMany?: Prisma.AlternativeUpdateManyWithWhereWithoutExerciseInput | Prisma.AlternativeUpdateManyWithWhereWithoutExerciseInput[];
    deleteMany?: Prisma.AlternativeScalarWhereInput | Prisma.AlternativeScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type AlternativeCreateWithoutExerciseInput = {
    id?: string;
    text: string;
    isCorrect?: boolean;
    order?: number;
};
export type AlternativeUncheckedCreateWithoutExerciseInput = {
    id?: string;
    text: string;
    isCorrect?: boolean;
    order?: number;
};
export type AlternativeCreateOrConnectWithoutExerciseInput = {
    where: Prisma.AlternativeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlternativeCreateWithoutExerciseInput, Prisma.AlternativeUncheckedCreateWithoutExerciseInput>;
};
export type AlternativeCreateManyExerciseInputEnvelope = {
    data: Prisma.AlternativeCreateManyExerciseInput | Prisma.AlternativeCreateManyExerciseInput[];
    skipDuplicates?: boolean;
};
export type AlternativeUpsertWithWhereUniqueWithoutExerciseInput = {
    where: Prisma.AlternativeWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlternativeUpdateWithoutExerciseInput, Prisma.AlternativeUncheckedUpdateWithoutExerciseInput>;
    create: Prisma.XOR<Prisma.AlternativeCreateWithoutExerciseInput, Prisma.AlternativeUncheckedCreateWithoutExerciseInput>;
};
export type AlternativeUpdateWithWhereUniqueWithoutExerciseInput = {
    where: Prisma.AlternativeWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlternativeUpdateWithoutExerciseInput, Prisma.AlternativeUncheckedUpdateWithoutExerciseInput>;
};
export type AlternativeUpdateManyWithWhereWithoutExerciseInput = {
    where: Prisma.AlternativeScalarWhereInput;
    data: Prisma.XOR<Prisma.AlternativeUpdateManyMutationInput, Prisma.AlternativeUncheckedUpdateManyWithoutExerciseInput>;
};
export type AlternativeScalarWhereInput = {
    AND?: Prisma.AlternativeScalarWhereInput | Prisma.AlternativeScalarWhereInput[];
    OR?: Prisma.AlternativeScalarWhereInput[];
    NOT?: Prisma.AlternativeScalarWhereInput | Prisma.AlternativeScalarWhereInput[];
    id?: Prisma.StringFilter<"Alternative"> | string;
    text?: Prisma.StringFilter<"Alternative"> | string;
    isCorrect?: Prisma.BoolFilter<"Alternative"> | boolean;
    order?: Prisma.IntFilter<"Alternative"> | number;
    exerciseId?: Prisma.StringFilter<"Alternative"> | string;
};
export type AlternativeCreateManyExerciseInput = {
    id?: string;
    text: string;
    isCorrect?: boolean;
    order?: number;
};
export type AlternativeUpdateWithoutExerciseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AlternativeUncheckedUpdateWithoutExerciseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AlternativeUncheckedUpdateManyWithoutExerciseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AlternativeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    order?: boolean;
    exerciseId?: boolean;
    exercise?: boolean | Prisma.ExerciseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alternative"]>;
export type AlternativeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    order?: boolean;
    exerciseId?: boolean;
    exercise?: boolean | Prisma.ExerciseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alternative"]>;
export type AlternativeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    order?: boolean;
    exerciseId?: boolean;
    exercise?: boolean | Prisma.ExerciseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alternative"]>;
export type AlternativeSelectScalar = {
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    order?: boolean;
    exerciseId?: boolean;
};
export type AlternativeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "text" | "isCorrect" | "order" | "exerciseId", ExtArgs["result"]["alternative"]>;
export type AlternativeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exercise?: boolean | Prisma.ExerciseDefaultArgs<ExtArgs>;
};
export type AlternativeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exercise?: boolean | Prisma.ExerciseDefaultArgs<ExtArgs>;
};
export type AlternativeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exercise?: boolean | Prisma.ExerciseDefaultArgs<ExtArgs>;
};
export type $AlternativePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Alternative";
    objects: {
        exercise: Prisma.$ExercisePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        text: string;
        isCorrect: boolean;
        order: number;
        exerciseId: string;
    }, ExtArgs["result"]["alternative"]>;
    composites: {};
};
export type AlternativeGetPayload<S extends boolean | null | undefined | AlternativeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlternativePayload, S>;
export type AlternativeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlternativeCountAggregateInputType | true;
};
export interface AlternativeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Alternative'];
        meta: {
            name: 'Alternative';
        };
    };
    findUnique<T extends AlternativeFindUniqueArgs>(args: Prisma.SelectSubset<T, AlternativeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AlternativeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AlternativeFindFirstArgs>(args?: Prisma.SelectSubset<T, AlternativeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AlternativeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AlternativeFindManyArgs>(args?: Prisma.SelectSubset<T, AlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AlternativeCreateArgs>(args: Prisma.SelectSubset<T, AlternativeCreateArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AlternativeCreateManyArgs>(args?: Prisma.SelectSubset<T, AlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AlternativeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AlternativeDeleteArgs>(args: Prisma.SelectSubset<T, AlternativeDeleteArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AlternativeUpdateArgs>(args: Prisma.SelectSubset<T, AlternativeUpdateArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AlternativeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AlternativeUpdateManyArgs>(args: Prisma.SelectSubset<T, AlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AlternativeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AlternativeUpsertArgs>(args: Prisma.SelectSubset<T, AlternativeUpsertArgs<ExtArgs>>): Prisma.Prisma__AlternativeClient<runtime.Types.Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AlternativeCountArgs>(args?: Prisma.Subset<T, AlternativeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlternativeCountAggregateOutputType> : number>;
    aggregate<T extends AlternativeAggregateArgs>(args: Prisma.Subset<T, AlternativeAggregateArgs>): Prisma.PrismaPromise<GetAlternativeAggregateType<T>>;
    groupBy<T extends AlternativeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlternativeGroupByArgs['orderBy'];
    } : {
        orderBy?: AlternativeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AlternativeFieldRefs;
}
export interface Prisma__AlternativeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    exercise<T extends Prisma.ExerciseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExerciseDefaultArgs<ExtArgs>>): Prisma.Prisma__ExerciseClient<runtime.Types.Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AlternativeFieldRefs {
    readonly id: Prisma.FieldRef<"Alternative", 'String'>;
    readonly text: Prisma.FieldRef<"Alternative", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"Alternative", 'Boolean'>;
    readonly order: Prisma.FieldRef<"Alternative", 'Int'>;
    readonly exerciseId: Prisma.FieldRef<"Alternative", 'String'>;
}
export type AlternativeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    where: Prisma.AlternativeWhereUniqueInput;
};
export type AlternativeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    where: Prisma.AlternativeWhereUniqueInput;
};
export type AlternativeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AlternativeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AlternativeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AlternativeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlternativeCreateInput, Prisma.AlternativeUncheckedCreateInput>;
};
export type AlternativeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AlternativeCreateManyInput | Prisma.AlternativeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AlternativeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    data: Prisma.AlternativeCreateManyInput | Prisma.AlternativeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AlternativeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AlternativeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlternativeUpdateInput, Prisma.AlternativeUncheckedUpdateInput>;
    where: Prisma.AlternativeWhereUniqueInput;
};
export type AlternativeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AlternativeUpdateManyMutationInput, Prisma.AlternativeUncheckedUpdateManyInput>;
    where?: Prisma.AlternativeWhereInput;
    limit?: number;
};
export type AlternativeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlternativeUpdateManyMutationInput, Prisma.AlternativeUncheckedUpdateManyInput>;
    where?: Prisma.AlternativeWhereInput;
    limit?: number;
    include?: Prisma.AlternativeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AlternativeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    where: Prisma.AlternativeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlternativeCreateInput, Prisma.AlternativeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AlternativeUpdateInput, Prisma.AlternativeUncheckedUpdateInput>;
};
export type AlternativeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
    where: Prisma.AlternativeWhereUniqueInput;
};
export type AlternativeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlternativeWhereInput;
    limit?: number;
};
export type AlternativeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlternativeSelect<ExtArgs> | null;
    omit?: Prisma.AlternativeOmit<ExtArgs> | null;
    include?: Prisma.AlternativeInclude<ExtArgs> | null;
};
