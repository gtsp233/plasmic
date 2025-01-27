// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Popover } from "antd";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { XDraggable } from "src/wab/commons/components/XDraggable";
import { useInteractOutsideWithCommonExceptions } from "../../../commons/components/OnClickAway";
import { useSignalListener } from "../../../commons/components/use-signal-listener";
import {
  getArenaName,
  isComponentArena,
  isPageArena,
} from "../../../shared/Arenas";
import { useResizableHandle } from "../../hooks/useResizableHandle";
import {
  DefaultArenaSwitcherProps,
  PlasmicArenaSwitcher,
} from "../../plasmic/plasmic_kit_top_bar/PlasmicArenaSwitcher";
import { useStudioCtx } from "../../studio-ctx/StudioCtx";
import { ProjectPanelTop } from "../sidebar-tabs/ProjectPanel/ProjectPanelTop";

export interface ArenaSwitcherProps extends DefaultArenaSwitcherProps {}

const ArenaSwitcher = observer(function ArenaSwitcher(
  props: ArenaSwitcherProps
) {
  const studioCtx = useStudioCtx();
  const [visible, setVisible] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  useSignalListener(
    studioCtx.showProjectPanelRequested,
    () => {
      setVisible(true);
      setTimeout(() => {
        studioCtx.focusOnProjectSearchInput();
      }, 100);
    },
    [studioCtx]
  );

  useInteractOutsideWithCommonExceptions({
    ref: popoverRef,
    isDisabled: !visible,
    exceptSelectors: ["#proj-nav-button", ".left-pane-resizer"],
    onInteractOutside: (e) => {
      if (!resizingState.current) {
        setVisible(false);
      }
    },
  });

  const currentArena = studioCtx.currentArena;
  const currentArenaName = currentArena ? getArenaName(currentArena) : "";

  const [popoverWidth, setPopoverWidth] = React.useState(300);
  const { onDrag, onDragStart, onDragStop, resizingState } = useResizableHandle(
    {
      panelRef: popoverRef,
      onChange: (width) => {
        setPopoverWidth(width);
      },
    }
  );

  return (
    <Popover
      placement="bottomLeft"
      content={
        <>
          <ProjectPanelTop
            ref={popoverRef}
            onClose={() => {
              setVisible(false);
            }}
          />
          <XDraggable onStart={onDragStart} onDrag={onDrag} onStop={onDragStop}>
            <div className="left-pane-resizer auto-pointer-events" />
          </XDraggable>
        </>
      }
      overlayInnerStyle={{ width: popoverWidth }}
      visible={visible}
      id="proj-nav-popover"
      overlayClassName={"ant-popover--dropdown-like"}
      destroyTooltipOnHide
    >
      <PlasmicArenaSwitcher
        onClick={() => {
          studioCtx.showProjectPanel();
        }}
        arenaType={
          isComponentArena(currentArena)
            ? "component"
            : isPageArena(currentArena)
            ? "page"
            : "mixed"
        }
        root={{
          children: (
            <span
              className="fill-width text-ellipsis inline-block"
              style={{ maxWidth: 300 }}
            >
              {currentArenaName}
            </span>
          ),
        }}
        id="proj-nav-button"
        {...props}
      />
    </Popover>
  );
});

export default ArenaSwitcher;
