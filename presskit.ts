namespace presskit {
    //% block="move to initial $position with $velocity and $acceleration || max force $overload" 
    //% velocity.defl=100 acceleration.defl=100
    //% inlineInputMode=inline
    export function initialPosition(velocity: number, acceleration: number, position: number, overload: number): void {
        console.log('presskit.initialPositionnnn')
        motion.axis1.move(MoveType.ABSOLUTE, position, velocity, acceleration)
    }
}