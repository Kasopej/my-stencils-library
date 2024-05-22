import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";

@Component({
    tag: 'wc-hc-app-drawer',
    shadow: true,
    styleUrl: 'index.css',
})
export class AppDrawer {
    @Prop({
        reflect: true,
    }) opened: boolean = false;

    @State() mode: 'navigation' | 'details' = 'details';
    @Event() openedChanged: EventEmitter<boolean>;
    
    render() {
        return (
            <aside>
                <header>
                    <button class={this.mode === 'navigation' ? 'active' : ''} onClick={(evt) => {
                        evt.stopPropagation()
                        this.mode = 'navigation'
                    }}>
                        Navigation
                        </button>
                        <button class={this.mode === 'details' ? 'active' : ''} onClick={(evt) => {
                            evt.stopPropagation()
                            this.mode = 'details'
                        }}>
                            Site Details
                        </button>
                        <span>
                        <button type="button" class="close-btn" onClick={(evt) => {
                            evt.stopPropagation()
                            this.openedChanged.emit(false)
                        }}>x</button>
                        </span>
                </header>
                <section>
            {this.mode === 'navigation' ? (
                <nav>
                    <slot name="navigation"></slot>
                </nav>
            ) : (
                <div>
                    <slot name="site-details"></slot>
                </div>
            )}
                </section>
            </aside>
        )
    }
}