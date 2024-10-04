export default function gaurdrail(mathFunction) {
    let queue = []

    try {
        queue.push(mathFunction());
    } catch (err) {
        queue.push(String(err));
    } finally {
        queue.push('Guardrail was processed');
    }

    return queue
}