//=============================================================================
// game_renderer_module
//=============================================================================

(function (game_renderer_module)
{

//=============================================================================
// game_renderer Class
//=============================================================================
game_renderer_module.game_renderer = 
function () 
{
    this.render = function( game_manager , game_canvas_context , width , height ) 
    {
        var game_board = game_manager.game_board_ ;

        var tile_width = width / game_board.num_tiles_x_ ;
        var tile_height = height / game_board.num_tiles_y_ ;

        for ( var i = 0 ; i < game_board.tiles_.length ; ++i )
        {
            
            game_canvas_context.fillStyle = game_board.tiles_[ i ].color_ ;
            game_canvas_context.fillRect( game_board.tiles_[ i ].x_ * tile_width , 
                                          game_board.tiles_[ i ].y_ * tile_height , 
                                          tile_width , 
                                          tile_height ) ;

            game_canvas_context.fillStyle = "#000000" ;
            game_canvas_context.textAlign="center";
            game_canvas_context.textBaseline="middle"; 
            game_canvas_context.font="30px Verdana";
            game_canvas_context.fillText( game_board.tiles_[ i ].level_.toString() , 
                                          game_board.tiles_[ i ].x_ * tile_width + tile_width / 2 , 
                                          game_board.tiles_[ i ].y_ * tile_height + tile_height / 2 );
        }
    }

    

} ;

}
)( typeof exports === 'undefined' ? this['game_renderer_module']={} : exports ) ; // end game_renderer_module
//=============================================================================