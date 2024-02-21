import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";

export function GameOverModal({ winnerSymbol, winnerName, players }) {
  return (
    <UiModal width="md" isOpen={winnerName}>
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3  bg-white rounded-2xl shadow-md px-8 py-4 mt-2">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
