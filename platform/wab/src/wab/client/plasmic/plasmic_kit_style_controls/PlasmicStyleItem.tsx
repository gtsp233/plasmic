// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: -L2zZ5Mvmr
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import DimTokenSelector from "../../components/widgets/DimTokenSelector"; // plasmic-import: s1ridHP4Z3T/component
import Chip from "../../components/widgets/Chip"; // plasmic-import: jW885tExwE/component
import Indicator from "../../components/style-controls/Indicator"; // plasmic-import: KRNHR6lpj1/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicStyleItem.module.css"; // plasmic-import: -L2zZ5Mvmr/css

export type PlasmicStyleItem__VariantMembers = {
  valueSetState: "isSet" | "isInherited" | "isUnset";
  noLabel: "noLabel";
  indicatorState: "isSet" | "isInherited";
  autoLabelWidth: "autoLabelWidth";
};

export type PlasmicStyleItem__VariantsArgs = {
  valueSetState?: SingleChoiceArg<"isSet" | "isInherited" | "isUnset">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  indicatorState?: SingleChoiceArg<"isSet" | "isInherited">;
  autoLabelWidth?: SingleBooleanChoiceArg<"autoLabelWidth">;
};

type VariantPropType = keyof PlasmicStyleItem__VariantsArgs;
export const PlasmicStyleItem__VariantProps = new Array<VariantPropType>(
  "valueSetState",
  "noLabel",
  "indicatorState",
  "autoLabelWidth"
);

export type PlasmicStyleItem__ArgsType = {
  label?: React.ReactNode;
  children?: React.ReactNode;
  styleProp?: string;
};

type ArgPropType = keyof PlasmicStyleItem__ArgsType;
export const PlasmicStyleItem__ArgProps = new Array<ArgPropType>(
  "label",
  "children",
  "styleProp"
);

export type PlasmicStyleItem__OverridesType = {
  root?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
  controlContainer?: p.Flex<"div">;
  indicatorContainer?: p.Flex<"div">;
  indicator?: p.Flex<typeof Indicator>;
};

export interface DefaultStyleItemProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  styleProp?: string;
  valueSetState?: SingleChoiceArg<"isSet" | "isInherited" | "isUnset">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  indicatorState?: SingleChoiceArg<"isSet" | "isInherited">;
  autoLabelWidth?: SingleBooleanChoiceArg<"autoLabelWidth">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicStyleItem__RenderFunc(props: {
  variants: PlasmicStyleItem__VariantsArgs;
  args: PlasmicStyleItem__ArgsType;
  overrides: PlasmicStyleItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "valueSetState",
        type: "private",
        initFunc: true
          ? ($props, $state, $ctx) => $props.valueSetState
          : undefined,
      },

      {
        path: "noLabel",
        type: "private",
        initFunc: true ? ($props, $state, $ctx) => $props.noLabel : undefined,
      },

      {
        path: "indicatorState",
        type: "private",
        initFunc: true
          ? ($props, $state, $ctx) => $props.indicatorState
          : undefined,
      },

      {
        path: "autoLabelWidth",
        type: "private",
        initFunc: true
          ? ($props, $state, $ctx) => $props.autoLabelWidth
          : undefined,
      },
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel") }
      )}
    >
      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainerautoLabelWidth]: hasVariant(
              $state,
              "autoLabelWidth",
              "autoLabelWidth"
            ),
            [sty.labelContainerindicatorState_isInherited]: hasVariant(
              $state,
              "indicatorState",
              "isInherited"
            ),
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
            [sty.labelContainervalueSetState_isInherited]: hasVariant(
              $state,
              "valueSetState",
              "isInherited"
            ),
            [sty.labelContainervalueSetState_isSet]: hasVariant(
              $state,
              "valueSetState",
              "isSet"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label,
            className: classNames(sty.slotTargetLabel, {
              [sty.slotTargetLabelvalueSetState_isInherited]: hasVariant(
                $state,
                "valueSetState",
                "isInherited"
              ),
              [sty.slotTargetLabelvalueSetState_isSet]: hasVariant(
                $state,
                "valueSetState",
                "isSet"
              ),
              [sty.slotTargetLabelvalueSetState_isUnset]: hasVariant(
                $state,
                "valueSetState",
                "isUnset"
              ),
            }),
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"controlContainer"}
        data-plasmic-override={overrides.controlContainer}
        className={classNames(projectcss.all, sty.controlContainer, {
          [sty.controlContainervalueSetState_isSet]: hasVariant(
            $state,
            "valueSetState",
            "isSet"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <DimTokenSelector
              existingTokens={
                <React.Fragment>
                  <Chip
                    className={classNames("__wab_instance", sty.chip___6L2Vm)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tapgM
                      )}
                    >
                      {"Token1"}
                    </div>
                  </Chip>

                  <Chip
                    className={classNames("__wab_instance", sty.chip__t6Vnz)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hpAoP
                      )}
                    >
                      {"Token2"}
                    </div>
                  </Chip>
                </React.Fragment>
              }
              showDropdownArrow={true}
            />
          ),

          value: args.children,
        })}
      </div>

      {(
        hasVariant($state, "indicatorState", "isInherited")
          ? true
          : hasVariant($state, "indicatorState", "isSet")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"indicatorContainer"}
          data-plasmic-override={overrides.indicatorContainer}
          className={classNames(projectcss.all, sty.indicatorContainer, {
            [sty.indicatorContainerindicatorState_isInherited]: hasVariant(
              $state,
              "indicatorState",
              "isInherited"
            ),
            [sty.indicatorContainerindicatorState_isSet]: hasVariant(
              $state,
              "indicatorState",
              "isSet"
            ),
            [sty.indicatorContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
          })}
        >
          <Indicator
            data-plasmic-name={"indicator"}
            data-plasmic-override={overrides.indicator}
          />
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "labelContainer",
    "controlContainer",
    "indicatorContainer",
    "indicator",
  ],
  labelContainer: ["labelContainer"],
  controlContainer: ["controlContainer"],
  indicatorContainer: ["indicatorContainer", "indicator"],
  indicator: ["indicator"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  labelContainer: "div";
  controlContainer: "div";
  indicatorContainer: "div";
  indicator: typeof Indicator;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicStyleItem__VariantsArgs;
  args?: PlasmicStyleItem__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicStyleItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicStyleItem__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicStyleItem__ArgProps,
          internalVariantPropNames: PlasmicStyleItem__VariantProps,
        }),
      [props, nodeName]
    );

    return PlasmicStyleItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleItem";
  } else {
    func.displayName = `PlasmicStyleItem.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleItem = Object.assign(
  // Top-level PlasmicStyleItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),
    controlContainer: makeNodeComponent("controlContainer"),
    indicatorContainer: makeNodeComponent("indicatorContainer"),
    indicator: makeNodeComponent("indicator"),

    // Metadata about props expected for PlasmicStyleItem
    internalVariantProps: PlasmicStyleItem__VariantProps,
    internalArgProps: PlasmicStyleItem__ArgProps,
  }
);

export default PlasmicStyleItem;
/* prettier-ignore-end */